"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(scope.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [scope]);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView, animate, filter, duration]);

  return (
    <div
      className={cn(
        "font-bold overflow-hidden border-none p-0 m-0",
        className
      )}
    >
      <div className="mt-4 text-gray-800 text-3xl leading-snug tracking-wide text-center">
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              className="text-gray-800 opacity-0 dark:text-customGray text-4xl"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
