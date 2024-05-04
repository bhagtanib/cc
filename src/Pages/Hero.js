import { React, useRef } from "react";
import "../Styles/Hero.css";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence, animate } from "framer-motion";
import vid from "../mainmonty.mov";
import { Button } from "@nextui-org/react";

const Hero = (aboutRef) => {
  return (
    <motion.div className="hero-container">
      <video
        src={vid}
        autoPlay="autoplay"
        loop="loop"
        muted
        className="video"
      ></video>
      <motion.div className="hero-split">
        <motion.div className="hero-left">
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            Hi, my name is
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.3, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            Mradul Mourya
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            Passionate about harnessing the power of data to drive innovation.{" "}
            <span style={{ transform: "rotate(90deg)" }}></span>{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            I specialize in crafting data-driven solutions,
            integrating modeling and visualization to fuel product innovation and enhance user experiences.{" "}
          </motion.p>

          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
