import ExcelJS from "exceljs";
import { promises as fs } from "fs";
import path from "path";

export type VisitorRow = {
  timestampIso: string;
  ip: string;
  userAgent: string;
  pathname: string;
  referrer: string;
  language: string;
};

const WORKSHEET_NAME = "visitors";
const HEADER_ROW = [
  "timestampIso",
  "ip",
  "userAgent",
  "pathname",
  "referrer",
  "language",
] as const;

function getDataFilePath(): string {
  // Next.js server runtime: cwd is the project root in most hosting setups.
  return path.join(process.cwd(), "data", "visitors.xlsx");
}

async function ensureDataDirExists(filePath: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function addHeaderIfMissing(worksheet: ExcelJS.Worksheet): void {
  const firstRow = worksheet.getRow(1);
  const firstRowValues = (firstRow?.values as any[] ?? []).slice(1);
  const looksLikeHeader =
    firstRowValues.length >= HEADER_ROW.length &&
    HEADER_ROW.every((h, idx) => firstRowValues[idx] === h);

  if (!looksLikeHeader) {
    worksheet.insertRow(1, [...HEADER_ROW]);
    worksheet.getRow(1).font = { bold: true };
  }
}

export async function appendVisitorRow(row: VisitorRow): Promise<{
  filePath: string;
  rowNumber: number;
}> {
  const filePath = getDataFilePath();
  await ensureDataDirExists(filePath);

  const workbook = new ExcelJS.Workbook();
  const exists = await fileExists(filePath);

  if (exists) {
    await workbook.xlsx.readFile(filePath);
  }

  const worksheet =
    workbook.getWorksheet(WORKSHEET_NAME) ?? workbook.addWorksheet(WORKSHEET_NAME);

  addHeaderIfMissing(worksheet);

  const rowNumber =
    worksheet.rowCount >= 1 ? worksheet.rowCount + 1 : 2; // 1 is header

  worksheet.addRow([
    row.timestampIso,
    row.ip,
    row.userAgent,
    row.pathname,
    row.referrer,
    row.language,
  ]);

  // Keep columns readable in Excel.
  worksheet.columns = [
    { key: "timestampIso", width: 26 },
    { key: "ip", width: 18 },
    { key: "userAgent", width: 60 },
    { key: "pathname", width: 24 },
    { key: "referrer", width: 40 },
    { key: "language", width: 14 },
  ];

  await workbook.xlsx.writeFile(filePath);

  return { filePath, rowNumber };
}


