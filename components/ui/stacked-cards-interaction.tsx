"use client";

import { cn } from "@/lib/utils";
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

          const currentX = isHovering ? xHover : xRest;
          const currentRot = isHovering ? rotHover : rotRest;

          return (
            <div
              key={index}
              className={cn("absolute transition-all duration-300 ease-in-out", isFirst ? "z-10" : "z-0")}
              style={{
                transform: `translateX(${currentX}px) rotate(${currentRot}deg)`,
              }}
              {...(isFirst && {
                onMouseEnter: () => setIsHovering(true),
                onMouseLeave: () => setIsHovering(false),
              })}
            >
              <Card
                className={isFirst ? "z-10 cursor-pointer" : "z-0"}
                image={card.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };
