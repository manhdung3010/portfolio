import { NextResponse } from "next/server";
import { appendVisitorRow, type VisitorRow } from "@/app/server/visitorExcel";

export const runtime = "nodejs";

function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "unknown";
}

function normalizeString(value: unknown, fallback = ""): string {
  if (typeof value !== "string") return fallback;
  return value.trim();
}

declare global {
  // Simple in-process queue to reduce concurrent writes within a single Node process.
  // Note: This does NOT coordinate across multiple instances (e.g., serverless scale-out).
  // eslint-disable-next-line no-var
  var __visitorExcelWriteQueue: Promise<unknown> | undefined;
}

function enqueueWrite<T>(work: () => Promise<T>): Promise<T> {
  const prev = globalThis.__visitorExcelWriteQueue ?? Promise.resolve();
  const next = prev.then(work, work);
  globalThis.__visitorExcelWriteQueue = next.then(
    () => undefined,
    () => undefined,
  );
  return next;
}

export async function POST(req: Request) {
  try {
    const headers = req.headers;
    const ip = getClientIp(headers);
    const userAgent = headers.get("user-agent") || "unknown";

    const body = await req.json().catch(() => ({}));
    const pathname = normalizeString(body?.pathname, "/");
    const referrer = normalizeString(body?.referrer, "");
    const language = normalizeString(body?.language, "");

    const row: VisitorRow = {
      timestampIso: new Date().toISOString(),
      ip,
      userAgent,
      pathname,
      referrer,
      language,
    };

    const result = await enqueueWrite(() => appendVisitorRow(row));

    return NextResponse.json({
      ok: true,
      saved: { rowNumber: result.rowNumber },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 },
    );
  }
}


