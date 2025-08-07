"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.75 15.5a7.25 7.25 0 0 1-9.25-9.25a.75.75 0 0 0-1.06-.82A9.25 9.25 0 1 0 19.57 16.56a.75.75 0 0 0-.82-1.06Z"/></svg>
      ) : (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 2.75Zm0 16.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8.25-7.25a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-16.5 0a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm13.39 5.11a.75.75 0 0 1 1.06 0l.71.71a.75.75 0 1 1-1.06 1.06l-.71-.71a.75.75 0 0 1 0-1.06Zm-12.02 0a.75.75 0 0 1 0 1.06l-.71.71a.75.75 0 1 1-1.06-1.06l.71-.71a.75.75 0 0 1 1.06 0Zm12.02-10.22a.75.75 0 0 1 1.06 1.06l-.71.71a.75.75 0 1 1-1.06-1.06l.71-.71Zm-12.02 0l-.71.71a.75.75 0 1 1-1.06-1.06l.71-.71a.75.75 0 1 1 1.06 1.06ZM12 6.25A5.75 5.75 0 1 1 6.25 12A5.76 5.76 0 0 1 12 6.25Z"/></svg>
      )}
    </button>
  );
}