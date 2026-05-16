"use client";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(Draggable);

const initialSlots = [
  { id: "black-square", shape: "square", color: "bg-background" },
  null,
  { id: "black-circle", shape: "circle", color: "bg-background" },
  { id: "yellow-square", shape: "square", color: "bg-yellow" },
  { id: "red-circle", shape: "circle", color: "bg-red" },
  null,

  { id: "red-square", shape: "square", color: "bg-red" },
  { id: "yellow-circle", shape: "circle", color: "bg-yellow" },
  { id: "blue-square-1", shape: "square", color: "bg-blue" },
  null,
  null,
  { id: "blue-square-2", shape: "square", color: "bg-blue" },
];

export function StructureCard() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [slots, setSlots] = useState(initialSlots);

  useLayoutEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const draggables: Draggable[] = [];

    slots.forEach((item, index) => {
      if (!item) return;

      const itemEl = itemRefs.current[item.id];
      if (!itemEl) return;

      const draggable = Draggable.create(itemEl, {
        type: "x,y",
        bounds: gridEl,
        zIndexBoost: true,
        cursor: "none",
        activeCursor: "none",

        onDragEnd() {
          const draggedId = item.id;

          const draggedRect = itemEl.getBoundingClientRect();
          const draggedCenterX = draggedRect.left + draggedRect.width / 2;
          const draggedCenterY = draggedRect.top + draggedRect.height / 2;

          const targetIndex = slotRefs.current.findIndex((slotEl) => {
            if (!slotEl) return false;

            const rect = slotEl.getBoundingClientRect();

            return (
              draggedCenterX >= rect.left &&
              draggedCenterX <= rect.right &&
              draggedCenterY >= rect.top &&
              draggedCenterY <= rect.bottom
            );
          });

          gsap.set(itemEl, { x: 0, y: 0 });

          if (targetIndex === -1 || targetIndex === index) return;

          setSlots((currentSlots) => {
            const nextSlots = [...currentSlots];

            const fromIndex = nextSlots.findIndex(
              (slotItem) => slotItem?.id === draggedId,
            );

            if (fromIndex === -1) return currentSlots;

            const draggedItem = nextSlots[fromIndex];
            const targetItem = nextSlots[targetIndex];

            nextSlots[targetIndex] = draggedItem;
            nextSlots[fromIndex] = targetItem;

            return nextSlots;
          });
        },
      })[0];

      draggables.push(draggable);
    });

    return () => {
      draggables.forEach((draggable) => draggable.kill());
    };
  }, [slots]);

  return (
    <div className="w-full h-full p-8 flex flex-col gap-2 cursor-none">
      <div className="flex items-end gap-4">
        <h1 className="text-red text-[8vw] leading-[8.5vw]">[02]</h1>
        <p className="text-[4vw] font-black">STRUCTURE</p>
      </div>

      <div>
        <p className="wide:text-xl text-lg font-bold tracking-widest text-justify uppercase text-background mb-4">
          Organizing ideas into clear flows, scalable systems and solid
          technical foundations.
        </p>
      </div>

      <div className="flex-1">
        <div ref={gridRef} className="grid grid-cols-6 grid-rows-2">
          {slots.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                slotRefs.current[index] = el;
              }}
              className={`border border-concrete aspect-square ${
                index === 0 || index === 6 ? "border-l-2" : ""
              } ${index === 5 || index === 11 ? "border-r-2" : ""} ${
                index <= 5 ? "border-t-2" : "border-b-2"
              }`}
            >
              {item && (
                <div
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className={`w-full h-full will-change-transform ${
                    item.color
                  } ${item.shape === "circle" ? "rounded-full" : ""}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
