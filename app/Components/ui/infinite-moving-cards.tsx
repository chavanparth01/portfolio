"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSound } from "@/app/Context/SoundContext";
import playSound from "@/app/utils/playSound";
import Image from "next/image";

type CardItem = {
  title: string;
  name: string;
  about: string;
  link: string;
  image: string;
};

const SPEED_PX_PER_SEC = {
  slow: 60,
  normal: 115,
  fast: 170,
} as const;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [hoverStyles, setHoverStyles] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLUListElement | null>(null);
  const offsetRef = useRef(0);
  const targetOffsetRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const suppressClickRef = useRef(false);

  const { sound } = useSound();

  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return 0;
    const secondSetStart = track.children[items.length] as HTMLElement | undefined;
    return secondSetStart ? secondSetStart.offsetLeft : track.scrollWidth / 2;
  }, [items.length]);

  const getCardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 466;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  }, []);

  const wrapOffsets = useCallback((loopWidth: number) => {
    if (loopWidth <= 0) return;
    while (offsetRef.current <= -loopWidth) {
      offsetRef.current += loopWidth;
      if (targetOffsetRef.current !== null) {
        targetOffsetRef.current += loopWidth;
      }
    }
    while (offsetRef.current > 0) {
      offsetRef.current -= loopWidth;
      if (targetOffsetRef.current !== null) {
        targetOffsetRef.current -= loopWidth;
      }
    }
  }, []);

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();
    const velocity =
      SPEED_PX_PER_SEC[speed] * (direction === "left" ? -1 : 1);

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const loopWidth = getLoopWidth();

      if (loopWidth > 0 && !isDraggingRef.current) {
        if (targetOffsetRef.current !== null) {
          const diff = targetOffsetRef.current - offsetRef.current;
          if (Math.abs(diff) < 0.75) {
            offsetRef.current = targetOffsetRef.current;
            targetOffsetRef.current = null;
          } else {
            offsetRef.current += diff * Math.min(1, dt * 10);
          }
          wrapOffsets(loopWidth);
          applyTransform();
        } else if (!(pauseOnHover && isHoveredRef.current)) {
          offsetRef.current += velocity * dt;
          wrapOffsets(loopWidth);
          applyTransform();
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [applyTransform, direction, getLoopWidth, pauseOnHover, speed, wrapOffsets]);

  const skipBy = (delta: number) => {
    const loopWidth = getLoopWidth();
    if (loopWidth <= 0) return;
    if (sound) playSound("/Sounds/clicksound2.wav");

    const base =
      targetOffsetRef.current !== null
        ? targetOffsetRef.current
        : offsetRef.current;
    targetOffsetRef.current = base + delta;
    wrapOffsets(loopWidth);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    lastPointerXRef.current = e.clientX;
    targetOffsetRef.current = null;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;

    if (!hasDraggedRef.current && Math.abs(e.clientX - dragStartXRef.current) > 6) {
      hasDraggedRef.current = true;
      setIsDragging(true);
      setHoveredKey(null);
      setHoverStyles({ transform: "rotateX(0deg) rotateY(0deg)" });
      trackRef.current?.setPointerCapture?.(e.pointerId);
    }

    if (hasDraggedRef.current) {
      const loopWidth = getLoopWidth();
      offsetRef.current += dx;
      wrapOffsets(loopWidth);
      applyTransform();
    }
  };

  const finishDrag = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!isDraggingRef.current) return;
    if (hasDraggedRef.current) {
      suppressClickRef.current = true;
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 60);
      if (trackRef.current?.hasPointerCapture?.(e.pointerId)) {
        trackRef.current.releasePointerCapture(e.pointerId);
      }
    }
    isDraggingRef.current = false;
    hasDraggedRef.current = false;
    setIsDragging(false);
  };

  const handleCardMouseEnter = (key: string) => {
    if (!isDraggingRef.current) {
      setHoveredKey(key);
    }
  };

  const handleCardMouseLeave = () => {
    setHoveredKey(null);
    setHoverStyles({ transform: "rotateX(0deg) rotateY(0deg)" });
  };

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: string
  ) => {
    if (isDraggingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * -20;

    if (hoveredKey === key) {
      setHoverStyles({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    }
  };

  const cardSets = [
    { prefix: "original", list: items },
    { prefix: "clone", list: items },
  ];

  return (
    <div
      className={`scroller relative z-20 w-full max-w-7xl overflow-hidden bg-slate-50 dark:bg-black [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)] ${className ?? ""}`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => skipBy(getCardStep())}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/90 text-gray-800 border border-black/15 shadow-lg backdrop-blur-sm flex items-center justify-center hover:scale-110 active:scale-95 transition dark:bg-gray-900/90 dark:text-white dark:border-white/20"
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => skipBy(-getCardStep())}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/90 text-gray-800 border border-black/15 shadow-lg backdrop-blur-sm flex items-center justify-center hover:scale-110 active:scale-95 transition dark:bg-gray-900/90 dark:text-white dark:border-white/20"
      >
        <FaChevronRight />
      </button>

      <ul
        ref={trackRef}
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onClickCapture={(e) => {
          if (suppressClickRef.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap h-[35rem] select-none will-change-transform ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {cardSets.map(({ prefix, list }) =>
          list.map((item, idx) => {
            const cardKey = `${prefix}-${idx}`;
            return (
              <li
                key={cardKey}
                className="relative w-[350px] max-w-full rounded-2xl border px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--sky-900), var(--slate-900))",
                  ...((hoveredKey === cardKey && !isDragging && hoverStyles) ||
                    {}),
                  transition: "transform 0.2s ease-out",
                }}
                onMouseEnter={() => handleCardMouseEnter(cardKey)}
                onMouseLeave={handleCardMouseLeave}
                onMouseMove={(e) => handleCardMouseMove(e, cardKey)}
              >
                <blockquote>
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={380}
                    width={600}
                    draggable={false}
                    className="relative w-full h-[17rem] object-cover object-top rounded-lg mb-[1rem]"
                  />

                  <div className="text-gray-400 font-extrabold text-xl text-center">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-400 font-normal text-center">
                    {item.about}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Link
                      href={item.link}
                      target="_blank"
                      draggable={false}
                      className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition ease-in duration-150 outline-none border border-black/20"
                      onClick={() =>
                        sound ? playSound("/Sounds/clicksound2.wav") : null
                      }
                    >
                      Explore
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="text-sm text-gray-400 font-normal absolute bottom-0 right-0 m-5">
                    {item.name}
                  </div>
                </blockquote>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
