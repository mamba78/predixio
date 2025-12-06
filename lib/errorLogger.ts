export type AppError = { message: string; stack?: string; name?: string; code?: string; };
export type ErrorContext = { component?: string; url?: string; userAgent?: string; timestamp?: string; [key: string]: any; };

const isProduction = process.env.NODE_ENV === "production";
const isBrowser = typeof window !== "undefined";

export const logError = (error: unknown, context: ErrorContext = {}): void => {
  if (!isProduction || !isBrowser) return;

  const errorObj: AppError = error instanceof Error
    ? { message: error.message, stack: error.stack, name: error.name }
    : { message: String(error) };

  fetch("/api/log-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: errorObj, context: { url: window.location.href, userAgent: navigator.userAgent, timestamp: new Date().toISOString(), ...context } }),
    keepalive: true,
  }).catch(() => {});
};

export const setupGlobalErrorLogging = (): void => {
  if (!isBrowser) return;

  window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => logError(e.reason, { type: "promise" }));
  window.addEventListener("error", (e: ErrorEvent) => logError(e.error || e.message, { type: "error", filename: e.filename, lineno: e.lineno, colno: e.colno }));
};
