import { useRef, useState, useEffect } from "react";
import "./about.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mr. Ujjwal Chatterjee",
    role: "Our Film Director",
    img: "UC.jpg",
    desc: "Ujjwal Chatterjee is an acclaimed film director whose career spans feature films, documentaries, television, and advertising. His debut 'Gondi' (1993) won a National Award, while his internationally recognized 'Escape from Taliban' received global acclaim. As founder of UCC Entertainments, he has produced numerous television serials and is currently directing 'Jungle Crows' for the Children Film Society India. His upcoming projects include 'NALINI,' a bilingual film about Rabindranath Tagore, in collaboration with Priyanka Chopra. Ujjwal serves on the Advisory Board of the Censor Board Film Certification and holds memberships in several prestigious film associations across India.",
    link: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <p style={{fontSize: "30px", fontWeight: "semibold"}}>{item.title}</p>
            <p style={{textAlign: "justify"}}>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="about" ref={ref}>
      <div className="progress">
        <p style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}>Our Team</p>
        <motion.div style={{ scaleX, height: "7px" }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default About;
