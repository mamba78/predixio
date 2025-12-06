// components/MarketCardSkeleton.tsx — THE FINAL SKELETON
"use client";

export default function MarketCardSkeleton({ isGrid }: { isGrid: boolean }) {
  // LIST VIEW — Mobile-first, DexScreener-style
  if (!isGrid) {
    return (
      <div className="group block bg-gray-900/95 border border-gray-700 rounded-2xl p-5 animate-pulse">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 bg-gray-700 rounded-full" />
              <div className="h-3 w-3 bg-gray-700 rounded-full" />
              <div className="h-4 w-16 bg-gray-700 rounded-full" />
            </div>
            <div className="hidden sm:block h-5 w-20 bg-gray-700 rounded" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-700 rounded-lg w-full" />
            <div className="h-6 bg-gray-700 rounded-lg w-4/5" />
          </div>

          {/* Liquidity Bar */}
          <div className="relative h-11 md:h-12 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-gradient-to-r from-gray-700 to-gray-600" />
              <div className="w-1/2 bg-gradient-to-l from-gray-700 to-gray-600" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-px h-full bg-white/20" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end">
            <div className="h-10 w-28 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // GRID VIEW — Desktop masterpiece skeleton
  return (
    <div className="group relative bg-gray-900/95 border border-gray-700 rounded-3xl p-7 animate-pulse flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div className="h-5 w-24 bg-gray-700 rounded-full" />
        <div className="h-4 w-16 bg-gray-700 rounded-full" />
      </div>

      {/* Title */}
      <div className="space-y-3 flex-1">
        <div className="h-8 bg-gray-700 rounded-xl w-full" />
        <div className="h-8 bg-gray-700 rounded-xl w-11/12" />
        <div className="h-8 bg-gray-700 rounded-xl w-10/12" />
      </div>

      {/* Liquidity Bar */}
      <div className="my-8 relative h-12 rounded-full overflow-hidden bg-gray-800 border border-gray-700 shadow-inner">
        <div className="absolute inset-0 flex">
          <div className="w-7/12 bg-gradient-to-r from-emerald-600/30 to-emerald-500/20" />
          <div className="w-5/12 bg-gradient-to-l from-red-600/30 to-red-500/20" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-px h-full bg-white/30" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-5 border-t border-gray-700 mt-auto">
        <div className="h-6 w-24 bg-gray-700 rounded-full" />
        <div className="h-12 w-32 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}
