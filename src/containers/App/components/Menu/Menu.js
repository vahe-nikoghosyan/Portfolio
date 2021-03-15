import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

import { Link } from "react-router-dom";

import "./menu.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Menu = ({ isDesktopOrLaptop, isTabletOrMobile }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    const myPosition = document.getElementsByClassName("txt")[0]?.innerHTML;
    const chars = myPosition?.trim().split("");
    if (
      document.getElementsByClassName("txt") &&
      document.getElementsByClassName("txt")[0]
    ) {
      document.getElementsByClassName("txt")[0].innerHTML =
        "<span>" + chars?.join("</span><span>") + "</span>";
    }
  }, []);

  return (
    <menu className="menu">
      {/* **** DESCTOP AND TABLET **** */}
      {isDesktopOrLaptop && (
        <div className="desctop-menu">
          <div className="i-am">
            <div className="my-photo">
              <img src="images/my_photo.jpg" alt="V N" />
            </div>
            <div className="name">Vahe</div>
            <div className="container-txt">
              <span className="txt anim-text-flow">Web Developer.</span>
            </div>
          </div>

          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/my-skills">My Skills</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
      {/* **** DESCTOP AND TABLET **** */}

      {/* **** MOBILE AND TABLET **** */}
      {isTabletOrMobile && (
        <div className="mobile-menu">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation isTabletOrMobile={isTabletOrMobile} />

            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      )}
      {/* **** MOBILE AND TABLET **** */}
    </menu>
  );
};

export default Menu;
