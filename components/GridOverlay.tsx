// components/GridOverlay.tsx

export function GridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 grid grid-cols-16 grid-rows-12">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="bg-white/10 border border-concrete row-span-12"
        />
      ))}
    </div>
  );
}