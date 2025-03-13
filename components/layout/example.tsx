"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const items = [
  {
    id: 1,
    content: "build apps ",
  },
  {
    id: 2,
    content: "Message #02",
  },
  {
    id: 3,
    content: "Message #03",
  },
];

export default function Example() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <p>
        I like:
        <AnimatePresence>
          <motion.span
            key={items[index].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            style={{ position: "absolute", paddingLeft: 5 }}
          >
            {items[index].content}
          </motion.span>
        </AnimatePresence>
      </p>
    </div>
  );
}
