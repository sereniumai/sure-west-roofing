"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({
  className,
  image,
}: {
  className?: string;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "w-[280px] cursor-pointer h-[210px] overflow-hidden rounded-[14px] shadow-[0_16px_48px_-14px_rgba(26,22,18,0.35),0_4px_10px_-4px_rgba(26,22,18,0.1)]",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full"
        />
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
  restSpread?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const limitedCards = cards.slice(0, 3);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[280px] h-[210px]">
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
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };
