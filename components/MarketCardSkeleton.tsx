// components/MarketCardSkeleton.tsx
export default function MarketCardSkeleton({ isGrid }: { isGrid: boolean }) {
  if (!isGrid) {
    return (
      <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-4 animate-pulse">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="h-5 bg-gray-700 rounded w-32" />
          <div className="h-10 bg-gray-700 rounded-full w-28" />
        </div>
        <div className="space-y-2">
          <div className="h-5 bg-gray-700 rounded" />
          <div className="h-5 bg-gray-700 rounded w-4/5" />
        </div>
        <div className="h-10 bg-gray-700 rounded-full mt-4" />
      </div>
    );
  }

  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-32 mb-4" />
      <div className="space-y-3">
        <div className="h-5 bg-gray-700 rounded" />
        <div className="h-5 bg-gray-700 rounded w-11/12" />
        <div className="h-5 bg-gray-700 rounded w-8/12" />
      </div>
      <div className="h-10 bg-gray-700 rounded-full my-6" />
      <div className="flex justify-between items-center mt-6">
        <div className="h-6 bg-gray-700 rounded w-20" />
        <div className="h-12 bg-gray-700 rounded-full w-32" />
      </div>
    </div>
  );
}