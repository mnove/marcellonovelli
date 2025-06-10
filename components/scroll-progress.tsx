"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll, useSpring } from "motion/react";
import React from "react";
type ScrollProgressProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
>;

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    damping: 50,
    restDelta: 0.001,
    stiffness: 200,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#70ffc8] via-[#31f6b1] to-[#7df6e7]",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
