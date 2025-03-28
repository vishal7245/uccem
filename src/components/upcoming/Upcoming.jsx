import { useRef, useEffect, useState } from "react";
import "./upcoming.scss";
import { motion, useInView } from "framer-motion";

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

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const boxVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Upcoming = () => {
  const ref = useRef();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Nalini: A Tagore Love Story",
      description: "A bilingual exploration of Rabindranath Tagore's love saga, directed by Ujjwal Chatterjee in collaboration with Priyanka Chopra and Dr. Madhu Chopra."
    },
    {
      title: "Jungle Crows",
      description: "A heartwarming story about the transformative power of rugby in young lives, currently in production for the Children Film Society India."
    },
    {
      title: "White Mischief",
      description: "A compelling drama weaving social justice and personal redemption in modern India, featuring powerful performances and thought-provoking storytelling."
    },
    {
      title: "Untitled IPS Vinod Mehta Biopic",
      description: "A biopic on IPS officer Vinod Mehta's extraordinary life, written by Pikkey Mehta and Sagarika Chatterjee with screenplay by Sanjay Masoom."
    }
  ];

  if (isMobile) {
    return (
      <div className="upcoming">
        <div className="textContainer">
          <p style={{color:"black"}}>
              Where Vision Meets Tradition,Stories That Transcend Time
          </p>
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/indian-cinema.jpg" alt="Film Making" />
            <h1>
              <b style={{color:"black"}}>Blockbusters</b> in Making
            </h1>
          </div>
          <div className="title">
            <h1>
              Let <b style={{color:"black"}}>Stories</b> take Flight
            </h1>
          </div>
        </div>
        <div className="listContainer">
          {services.map((service, index) => (
            <div key={index} className="box">
              <h2 style={{color:"white"}}>{service.title}</h2>
              <p style={{color:"rgba(255, 255, 255, 0.7)"}}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="upcoming"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p style={{color:"black"}}>
        Where Vision Meets Tradition,Stories That Transcend Time
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/indian-cinema.jpg" alt="Film Making" />
          <h1>
            <motion.b style={{color:"black"}} whileHover={{color:"white", scale: 1.1}}>Blockbuster</motion.b> in Making
          </h1>
        </div>
        <div className="title">
          <h1>
            Let <motion.b style={{color:"black"}} whileHover={{color:"white", scale: 1.1}}>Stories</motion.b> take Flight
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            variants={boxVariants}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <h2 style={{color:"white"}}>{service.title}</h2>
            <p style={{color:"white"}}>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Upcoming;
