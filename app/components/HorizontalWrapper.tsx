"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: number;
  height: string;
}

function HorizontalWrapper({ children, direction, height }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;
