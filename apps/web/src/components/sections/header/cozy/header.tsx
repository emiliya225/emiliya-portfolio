"use client";

import { metadata as meta } from "@/app/config";
import MotionLink from "@/components/fancy/link";
import { links } from "@/components/sections/header/config";
import { motion } from "motion/react";

import styles from "./style.module.scss";

const visibleLinks = links.filter((link) =>
  ["Projects", "Resume"].includes(link.title),
);

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className={styles.bar}>
        <MotionLink href="/" className={styles.brand}>
          {meta.author.name}
        </MotionLink>

        <nav className={styles.navLinks} aria-label="Main navigation">
          {visibleLinks.map((link) => (
            <MotionLink key={link.href} href={link.href}>
              {link.title}
            </MotionLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
