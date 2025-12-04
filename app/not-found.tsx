import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl mt-8 text-gray-400">Page not found</p>
        <Link
          href="/"
          className="inline-block mt-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Back to Predixio
        </Link>
      </div>
    </main>
  );
}
