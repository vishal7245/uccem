import { useRef, useEffect, useState } from "react";
import "./services.scss";
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

const Services = () => {
  const ref = useRef();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Cultural Documentaries",
      description: "We delve into India's rich history, traditions, and folklore, bringing you visually stunning and deeply researched narratives."
    },
    {
      title: "Short Films with a Purpose",
      description: "Telling impactful stories that highlight social issues, human experiences, and cultural values through cinematic storytelling."
    },
    {
      title: "Heritage & Art Films",
      description: "A tribute to India's art forms, music, dance, and craftsmanship, showcasing the true spirit of our roots."
    },
    {
      title: "Customized Video Production",
      description: "From concept to screen, we craft compelling content that aligns with your vision while staying true to Indian ethos."
    }
  ];

  if (isMobile) {
    return (
      <div className="services">
        <div className="textContainer">
          <p style={{color:"black"}}>
            We focus on capturing the essence of India's
          </p>
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/film-making-2.jpg" alt="Film Making" />
            <h1>
              Bringing<b style={{color:"black"}}>Stories</b> to Life
            </h1>
          </div>
          <div className="title">
            <h1>
              <b style={{color:"black"}}>Rooted</b> in Tradition.
            </h1>
            <button>WHAT WE DO?</button>
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
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p style={{color:"black"}}>
          We focus on capturing the essence of India's
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/film-making-2.jpg" alt="Film Making" />
          <h1>
            Bringing<motion.b style={{color:"black"}} whileHover={{color:"white", scale: 1.1}}>Stories</motion.b> to Life
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b style={{color:"black"}} whileHover={{color:"white", scale: 1.1}}>Rooted</motion.b> in Tradition.
          </h1>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "#Portfolio";
            }}
          >
            WHAT WE DO?
          </motion.button>
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

export default Services;
