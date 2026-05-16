"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const particles = [
  { x: 8, y: 18, size: 8, color: "bg-background" },
  { x: 18, y: 34, size: 5, color: "bg-yellow" },
  { x: 28, y: 22, size: 7, color: "bg-background" },
  { x: 38, y: 48, size: 4, color: "bg-red" },
  { x: 48, y: 28, size: 9, color: "bg-background" },
  { x: 58, y: 42, size: 5, color: "bg-blue" },
  { x: 68, y: 20, size: 7, color: "bg-background" },
  { x: 78, y: 36, size: 4, color: "bg-background" },
  { x: 88, y: 24, size: 8, color: "bg-red" },

  { x: 12, y: 62, size: 5, color: "bg-background" },
  { x: 24, y: 74, size: 8, color: "bg-blue" },
  { x: 36, y: 66, size: 4, color: "bg-background" },
  { x: 46, y: 82, size: 6, color: "bg-yellow" },
  { x: 56, y: 68, size: 5, color: "bg-background" },
  { x: 66, y: 78, size: 9, color: "bg-red" },
  { x: 76, y: 64, size: 4, color: "bg-background" },
  { x: 86, y: 82, size: 7, color: "bg-background" },

  { x: 14, y: 46, size: 4, color: "bg-yellow" },
  { x: 32, y: 38, size: 6, color: "bg-background" },
  { x: 52, y: 54, size: 4, color: "bg-blue" },
  { x: 72, y: 52, size: 6, color: "bg-background" },
  { x: 92, y: 58, size: 5, color: "bg-red" },
];

export function DiscoverCard() {
  const particlesFieldRef = useRef<HTMLDivElement | null>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const particlesFieldEl = particlesFieldRef.current;

    if (!particlesFieldEl) return;

    const particleEls = particleRefs.current.filter(
      Boolean,
    ) as HTMLDivElement[];

    const particleState = particleEls.map((el) => ({
      el,
      originX: 0,
      originY: 0,
      x: 0,
      y: 0,
    }));

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const setOrigins = () => {
      const fieldRect = particlesFieldEl.getBoundingClientRect();

      particleState.forEach((particle) => {
        const rect = particle.el.getBoundingClientRect();

        particle.originX = rect.left - fieldRect.left + rect.width / 2;
        particle.originY = rect.top - fieldRect.top + rect.height / 2;

        particle.x = particle.originX;
        particle.y = particle.originY;
      });
    };

    setOrigins();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = particlesFieldEl.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;

      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    particlesFieldEl.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    particlesFieldEl.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    window.addEventListener("resize", setOrigins);

    const radius = 120;
    const strength = 72;

    const animateParticles = () => {
      particleState.forEach((particle) => {
        let targetX = particle.originX;
        let targetY = particle.originY;

        if (mouse.active) {
          const dx = particle.originX - mouse.x;
          const dy = particle.originY - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius && distance > 0) {
            const force = (radius - distance) / radius;

            const angle = Math.atan2(dy, dx);

            targetX += Math.cos(angle) * force * strength;

            targetY += Math.sin(angle) * force * strength;
          }
        }

        particle.x += (targetX - particle.x) * 0.12;
        particle.y += (targetY - particle.y) * 0.12;

        gsap.set(particle.el, {
          x: particle.x - particle.originX,
          y: particle.y - particle.originY,
        });
      });

      requestAnimationFrame(animateParticles);
    };

    const animationFrame = requestAnimationFrame(
      animateParticles,
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      particlesFieldEl.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      particlesFieldEl.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      window.removeEventListener("resize", setOrigins);
    };
  }, []);

  return (
    <div className="w-full h-full p-8 flex flex-col gap-2">
      <div className="flex items-end gap-4">
        <h1 className="text-red text-[8vw] leading-[8.5vw]">
          [01]
        </h1>

        <p className="text-[4vw] font-black">DISCOVER</p>
      </div>

      <div>
        <p className="wide:text-xl text-lg font-bold tracking-widest text-justify uppercase text-background">
          Understanding the{" "}
          <span className="bg-blue">business</span>,
          identifying{" "}
          <span className="bg-yellow">user needs</span> and
          uncovering the real{" "}
          <span className="bg-red">problems</span> behind the
          surface.
        </p>
      </div>

      <div
        ref={particlesFieldRef}
        className="relative flex-1 overflow-hidden"
      >
        {particles.map((particle, index) => (
          <div
            key={index}
            ref={(el) => {
              particleRefs.current[index] = el;
            }}
            className={`absolute rounded-full will-change-transform wide:scale-150 ${particle.color}`}
            style={{
              width: particle.size * 2,
              height: particle.size * 2,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}