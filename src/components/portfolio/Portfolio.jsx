import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Swabhoomi (2013)",
    img: "swabhoomi.jpg",
    desc: "Swabhoomi is a socio-political drama directed by Ujjvwal Chatterjee, adapted from Mahasweta Devi's novel Adhoba. The film portrays the struggle of villagers in Shantigram against forced land acquisition, focusing on homemaker Saraswati Pramanik (Debasree Roy), her husband Haran (Debesh Roychowdhury), and four youths who sacrifice their lives defending their community's land rights. Set against the backdrop of events reminiscent of the Nandigram and Singur unrests, the narrative delves into the conflict between livelihood and imposed development. Jackie Shroff features as an IPS officer, with Satabdi Roy portraying his wife. The ensemble cast also includes Tapas Paul and Dimpy Mahajan.",
    link: "https://www.imdb.com/title/tt3209244/",
  },
  {
    id: 2,
    title: "Uthaan (2006)",
    img: "uthaan.jpg",
    desc: "Utthaan is a 2006 Hindi drama directed by Ujjwal Chatterjee and produced by Kumar Sanu, who also composed its music. The film stars Priyanshu Chatterjee as Prashant Bharti, a dedicated host of the reality TV series 'Rubaru,' and Neha Dhupia as Kiran Talreja, a 'Miss Mumbai' beauty contest winner. Their love story unfolds as they collaborate with journalists to expose political corruption. The supporting cast includes Preeti Puri, Anjan Srivastav, and Saroj Khan.",
    link: "https://www.imdb.com/title/tt0489582/",
  },
  {
    id: 3,
    title: "Escape from Taliban (2003)",
    img: "eft.jpg",
    desc: "Escape from Taliban is a 2003 Indian film directed by Ujjwal Chatterjee, adapted from Sushmita Banerjee's memoir, Kabuliwalar Bangali Bou (A Kabuliwala's Bengali Wife). The film stars Manisha Koirala as Sushmita Banerjee, a Bengali woman who marries an Afghan man, Jaanbaz Khan (portrayed by Nawab Shah), and moves to Afghanistan. There, she confronts the oppressive realities of life under Taliban rule and embarks on a perilous journey to escape and return to India. The narrative highlights her resilience against systemic subjugation and her determination to reclaim freedom. The supporting cast includes Vineeta Malik, Prithvi Zutshi, and Alyy Khan. The film was shot across various locations in India, including Jaisalmer, Hyderabad, Mumbai, and Ladakh.",
    link: "https://www.imdb.com/title/tt0312664/",
  },
  {
    id: 4,
    title: "Kaal Ratri (1993)",
    img: "kaal-ratri.jpg",
    desc: "Kaal Ratri is a 1997 Bengali drama directed by Ujjwal Chatterjee. The film centers on a harrowing night when Savitri, the daughter of a poor man, is brutally raped by local youths, including the son of the school principal. Upon discovering his son's involvement, the principal is devastated and suffers a severe heart attack. The narrative delves into themes of societal corruption, moral dilemmas, and the quest for justice. The cast features Soumitra Chatterjee, Anusuya Majumdar, Partha Banerjee, Arun Banerjee, Arjun Bhattacharya, Shankar Chakraborty, Chandan Das, and Mouli Ganguly.",
    link: "https://www.imdb.com/title/tt7180718/",
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
            <motion.div style={{ position: 'relative', zIndex: 1 }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>IMBD</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <p style={{ color: "white", fontSize: "60px", fontWeight: "bold", }}>Featured Works</p>
        {/* thickness of progress bar */}
        <motion.div style={{ scaleX, height: "7px" }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
