"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.transform = `
      translate3d(${event.clientX}px, ${event.clientY}px, 0)
      translate(-50%, -50%)
    `;
    };

    const handleMouseDown = () => {
      cursor.style.width = "28px";
      cursor.style.height = "28px";
    };

    const handleMouseUp = () => {
      cursor.style.width = "42px";
      cursor.style.height = "42px";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handleMouseDown);
    window.addEventListener("pointerup", handleMouseUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handleMouseDown);
      window.removeEventListener("pointerup", handleMouseUp);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
