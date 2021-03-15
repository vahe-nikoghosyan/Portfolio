import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ isTabletOrMobile }) => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
    {isTabletOrMobile && (
      <motion.li variants={liVariants}>
        <motion.div className="mobile-social">
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <img src="/images/github.svg" alt="Github" width="44" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <img src="/images/instagram.png" alt="Instagram" width="44" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <img src="/images/facebook.svg" alt="Facebook" width="44" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <img src="/images/linkedin.svg" alt="Linkedin" width="44" />
          </motion.a>
        </motion.div>
      </motion.li>
    )}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
