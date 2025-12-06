export const logError = (error: unknown, context?: Record<string, any>) => {
  if (process.env.NODE_ENV !== "production") return;

  const errorObj = error instanceof Error 
    ? { message: error.message, stack: error.stack }
    : { message: String(error) };

  fetch("/api/log-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      error: errorObj,
      context,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {});
};

export const setupGlobalErrorLogging = () => {
  window.addEventListener("unhandledrejection", (e) => logError(e.reason, { type: "promise" }));
  window.addEventListener("error", (e) => logError(e.error || e.message, { type: "error" }));
};
