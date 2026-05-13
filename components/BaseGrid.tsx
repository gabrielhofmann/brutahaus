import { ReactNode } from "react";

export function BaseGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-16 grid-rows-12 w-full h-full ${className}`}>
      {children}
    </div>
  );
}
