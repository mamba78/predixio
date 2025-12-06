// app/not-found.tsx → REPLACE WITH THIS
import Link from "next/link";

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "404 – Page Not Found | Predixio",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-gray-400 mt-8 mb-12">Page not found</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full hover:scale-105 transition shadow-lg"
        >
          Back to Markets
        </Link>
      </div>
    </div>
  );
}
