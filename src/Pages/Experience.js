import React, { useEffect, useState } from "react";
import "../Styles/Experience.css";
import { works } from "../data/works";
import { AnimatePresence, motion } from "framer-motion";

const Experience = () => {
  console.log(works);
  const [currentWork, setCurrentWork] = useState(0);
  const [showWorkDetails, setShowWorkDetails] = useState(true);
  const changeCurrentWork = (index) => {
    console.log("hiiiiiiiiii", index);
    setShowWorkDetails(false);
    setCurrentWork(index);
    setTimeout(() => {
      setShowWorkDetails(true);
    }, 100);
  };
  useEffect(() => {}, [currentWork]);
  return (
    <div className="experience-container">
      <div className="experience-header">
        <p>
          <span>03. </span>My Work Experience
        </p>
        <span className="experience-header-line"></span>
      </div>
      <div className="experience-details">
        <div className="experience-details-left">
          <ul>
            {works.map((w, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 * index }}
                key={index}
                onClick={() => changeCurrentWork(index)}
              >
                {" "}
                {w.company}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="experience-details-right">
          <motion.p
            className="experience-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: works.length * 0.2 }}
          >
            {" "}
            {works[currentWork].title}{" "}
            <span> @ {works[currentWork].acronym}</span>
          </motion.p>
          <motion.p
            className="experience-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: (works.length + 1) * 0.2 }}
          >
            {works[currentWork].timeline}
          </motion.p>
          <motion.ul className="experience-description">
            {showWorkDetails &&
              works[currentWork].desc.map((w, index) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index + (works.length + 1) * 0.2,
                  }}
                  key={index}
                >
                  {w}
                </motion.li>
              ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
