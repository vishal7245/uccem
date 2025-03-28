import { useRef, useEffect, useState } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 738);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const Parallax = ({ type }) => {
  const ref = useRef();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "200%" : "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "50%" : "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,rgb(221, 131, 35),rgb(228, 148, 36))"
            : type === "upcoming"
            ? "linear-gradient(180deg,rgb(238, 157, 35), rgb(240, 162, 36))"
            : "linear-gradient(180deg,rgb(239, 141, 37),rgb(209, 145, 41))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" 
          ? "What We Do?" 
          : type === "about"
          ? "Who We Are?"
          : type === "upcoming"
          ? "See What's Coming Soon!"
          : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(sky-and-sun.png)`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
