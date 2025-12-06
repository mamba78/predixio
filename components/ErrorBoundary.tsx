// components/ErrorBoundary.tsx
"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optional: Send to error reporting service (Sentry, LogRocket, etc.)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="text-center max-w-md">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Oops
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Something went wrong loading Predixio.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                {this.state.error?.message || "Unknown error"}
              </p>
              <button
                onClick={this.handleRetry}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition shadow-xl"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
