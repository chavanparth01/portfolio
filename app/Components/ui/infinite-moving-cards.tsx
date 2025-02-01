import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useSound } from "@/app/Context/SoundContext";
import playSound from "@/app/utils/playSound";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    name: string;
    about: string;
    link: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoverStyles, setHoverStyles] = useState<Record<string, string>>({});

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    pauseOnHover = true;
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setHoverStyles({ transform: "rotateX(0deg) rotateY(0deg)" });
    pauseOnHover = false;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    idx: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to card
    const y = e.clientY - rect.top; // Mouse Y relative to card

    // Calculate rotation angles
    const rotateX = ((y / rect.height) - 0.5) * 20; // 20 degrees max
    const rotateY = ((x / rect.width) - 0.5) * -20; // 20 degrees max (inverse for Y)

    if (hoveredIdx === idx) {
      setHoverStyles({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    }
  };
  
  const { sound } = useSound();

  return (
    <div
      className={`scroller relative z-20 max-w-7xl overflow-hidden bg-slate-50 dark:bg-black [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        className = {`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap h-[35rem] animate-scroll ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        style={{
          animationDuration: speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <li
            key={`original-${idx}`}
            className={`relative w-[350px] max-w-full rounded-2xl border px-8 py-6 md:w-[450px]`}
            style={{
              background: "linear-gradient(180deg, var(--sky-900), var(--slate-900))",
              ...((hoveredIdx === idx && hoverStyles) || {}),
              transition: "transform 0.2s ease-out",
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, idx)}
          >
            <blockquote>
              {/* <Image
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
                quality={100}
                loading="lazy"
                className="relative w-full h-[17rem] object-cover object-center rounded-lg mb-[1rem]"
              /> */}
              <Image src={item.image} alt={item.name} height ={300} width = {300}  className="relative w-full h-[17rem] object-cover object-center rounded-lg mb-[1rem]"/>

              <div className=" text-gray-400 font-extrabold text-xl text-center">{item.title}</div>
              <div className="text-sm text-gray-400 font-normal text-center">{item.about}</div>
              <div className="mt-6 flex justify-center">
                <Link
                  href={item.link}
                  target="_blank"
                  className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105  active:scale-100 transition ease-in duration: 150 outline-none border border-black/20"
                  onClick={()=>sound ? playSound("/Sounds/clicksound2.wav") : null}
                >
                  Explore
                  < FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
              <div className="text-sm text-gray-400 font-normal absolute bottom-0 right-0 m-5">{item.name}</div>
            </blockquote>
          </li>
        ))}

        {/* Second set of items to clone the first set */}
        {items.map((item, idx) => (
          <li
            key={`clone-${idx}`}
            className={`relative w-[350px] max-w-full rounded-2xl border px-8 py-6 md:w-[450px]`}
            style={{
              background: "linear-gradient(180deg, var(--sky-900), var(--slate-900))",
              ...((hoveredIdx === idx && hoverStyles) || {}),
              transition: "transform 0.2s ease-out",
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, idx)}
          >
            <blockquote>
              <Image src={item.image} alt={item.name} height = {300} width={300}  className="relative w-full h-[17rem] object-cover object-center rounded-lg mb-[1rem]"/>
              {/* <div className="text-sm text-gray-400 font-normal">{item.name}</div> */}
              <div className=" text-gray-400 font-extrabold text-xl text-center">{item.title}</div>
              <div className="text-sm text-gray-400 font-normal text-center">{item.about}</div>
              <div className="mt-6 flex justify-center">
              <Link
                  href={item.link}
                  target="_blank"
                  className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105  active:scale-100 transition ease-in duration: 150 outline-none border border-black/20"
                  onClick={()=>sound ? playSound("/Sounds/clicksound2.wav") : null}
                >
                  Explore
                  < FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
              <div className="text-sm text-gray-400 font-normal absolute bottom-0 right-0 m-5">{item.name}</div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
