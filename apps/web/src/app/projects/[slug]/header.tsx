"use client";

import type { Project } from "@/types/project";
import React from "react";
import { motion } from "motion/react";

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderProps {
  metadata: Project;
}

const Header = (props: HeaderProps) => {
  const {
    metadata: { title },
  } = props;

  return (
    <div className="pt-10">
      <motion.div
        initial={animation.hide}
        animate={animation.show}
      >
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
          {title}
        </h1>
      </motion.div>
    </div>
  );
};

export default Header;