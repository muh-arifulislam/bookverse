export default function Loading() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20 animate-pulse">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="">
            <div className="bg-gray-200 h-64 rounded-md mb-4" />
            <span className="inline-block h-4 w-full bg-gray-200 rounded-md mb-2" />

            <div className="flex items-center justify-between">
              <span className="inline-block h-4 w-24 bg-gray-200 rounded-md" />
              <div className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 bg-gray-200 rounded-md" />
                <span className="inline-block h-4 w-4 bg-gray-200 rounded-md" />
                <span className="inline-block h-4 w-4 bg-gray-200 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
