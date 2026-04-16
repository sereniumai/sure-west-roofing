"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[350px] cursor-pointer h-[400px] overflow-hidden bg-white rounded-2xl shadow-[0_12px_40px_-10px_rgba(26,22,18,0.35),0_4px_12px_-4px_rgba(26,22,18,0.12)] border border-gray-200/60",
        className
      )}
    >
      {image && (
        <div className="relative h-72 rounded-xl shadow-lg overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2">
          <img
            src={image}
            alt="card"
            className="object-cover mt-0 w-full h-full"
          />
        </div>
      )}
      {children && (
        <div className="px-4 p-2 flex flex-col gap-y-2">{children}</div>
      )}
    </div>
  );
};

interface CardData {
  image: string;
  title: string;
  description: string;
}

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 40,
  rotationAngle = 5,
  animationDelay = 0.1,
  restSpread = 0.45,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
  /** How much of the full spread to show at rest (0-1). Default 0.45. */
  restSpread?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const limitedCards = cards.slice(0, 3);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[350px] h-[400px]">
        {limitedCards.map((card, index) => {
          const isFirst = index === 0;

          let xHover = 0;
          let rotHover = 0;
          let xRest = 0;
          let rotRest = 0;

          if (limitedCards.length > 1) {
            if (index === 1) {
              xHover = -spreadDistance;
              rotHover = -rotationAngle;
              xRest = -spreadDistance * restSpread;
              rotRest = -rotationAngle * restSpread;
            } else if (index === 2) {
              xHover = spreadDistance;
              rotHover = rotationAngle;
              xRest = spreadDistance * restSpread;
              rotRest = rotationAngle * restSpread;
            }
          }

          return (
            <motion.div
              key={index}
              className={cn("absolute", isFirst ? "z-10" : "z-0")}
              initial={{ x: xRest, rotate: rotRest }}
              animate={{
                x: isHovering ? xHover : xRest,
                rotate: isHovering ? rotHover : rotRest,
                zIndex: isFirst ? 10 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                delay: index * animationDelay,
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              {...(isFirst && {
                onHoverStart: () => setIsHovering(true),
                onHoverEnd: () => setIsHovering(false),
              })}
            >
              <Card
                className={isFirst ? "z-10 cursor-pointer" : "z-0"}
                image={card.image}
              >
                <h2 className="font-display font-semibold text-[--color-near-black] text-[15px] tracking-tight">{card.title}</h2>
                <p className="text-[--color-near-black]/65 text-[13px]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{card.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };
