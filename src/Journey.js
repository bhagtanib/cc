import { Balance } from "@mui/icons-material";
import React, { useState } from 'react';
import Card from "./Card";
import "./Journey.css";
import { images1, images2 } from "./data";
import { motion } from "framer-motion";
import {
  workExperience,
  certificate,
  projects,
  factsTable,
} from "./data/tabledetails";
import ArrowDown from "./images/arrowDown.png";
const Journey = () => {
  const [showInfo, setShowInfo] = useState(false);
  const tables = [];
  return (
    <div className="journey-page">
        <div className="journey-header">
        <span className="journey-header-line"></span>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          viewport={{
            once: true,
          }}
        >
          <span style={{ fontWeight: 400 }}>02. </span>FROM SOURCE TO SOLUTION: Visualizing My Data Journey
          <button className="info-button" onClick={() => setShowInfo(!showInfo)}>i</button>
        </motion.p>
        {showInfo && (
          <div className="info-box">
            
<div> <b>Welcome to My Data Journey!</b></div>
<div></div>
<div>In this visualization, I've represented my journey of acquiring, refining, and showcasing knowledge using the analogy of a data architecture diagram. Let me walk you through each stage:</div>
<div></div>
<div><b>1. Knowledge Source:</b></div>
<div>At the beginning of my journey, I draw knowledge from various sources such as university courses, books, online divlatforms, and hands-on practice with Python and SQL.</div>
<div></div>
<div><b>2. Orchestrate:</b></div>
<div>Next, I orchestrate this raw knowledge through two key stages:</div>
<div></div>
<div><li>Ingest: I gather and organize knowledge using tools like Notion and Confluence, ensuring it's easily accessible and manageable.</li></div>
<div><li>Source: My brain serves as the processing center, where I absorb and synthesize knowledge, transforming it into actionable insights.</li></div>
<div><b>3. Expose:</b></div>
<div>Finally, I expose my refined knowledge through:</div>
<div></div>
<div><li>Work Experience: Practical application of skills in real-world settings.</li></div>
<div><li>Analytics: Applying knowledge to analyze data and derive meaningful insights.</li></div>
<div><li>Projects: Transforming raw knowledge into practical solutions.</li></div>
<div><li>Certifications: Validating and enhancing my exdivertise.</li></div>
<div>Feel free to explore each component by clicking on the respective icons or tables. I've included clickable links to provide further context and details.</div>
<div></div>
<div>Thank you for joining me on this data journey! If you have any questions or want to connect further, don't hesitate to reach out.</div>

          </div>
        )}
      </div>
      <div className="journey-container">
        <div className="journey-knowledge-container journey-dialog">
          <span>KNOWLEDGE SOURCE</span> 
          <div className="journey-dialog-images">
            {images1.map((imageName) => (
              <img
                onClick={() =>
                  window.open(imageName.link, "_blank", "noopener,noreferrer")
                }
                key={imageName.name}
                src={`${process.env.PUBLIC_URL}/images/${imageName.name}`}
                alt="Imagessss"
              />
              //console.log(`${process.env.PUBLIC_URL}/images/${imageName}`)
            ))}
          </div>
        </div>
        <div className="journey-mid-container journey-dialog">
          <span>ORCHESTRATE</span>
          <div className="journey-dialog-images">
            <div className="journey-dialog-images-mid-top">
              {images2.top.map((imageName) => (
                <img
                  onClick={() =>
                    window.open(imageName.link, "_blank", "noopener,noreferrer")
                  }
                  key={imageName.name}
                  src={`${process.env.PUBLIC_URL}/images/${imageName.name}`}
                  alt="Imag"
                />
              ))}
              <span> INGEST </span>
            </div>

            <div className="journey-dialog-images-mid-bottom">
              {images2.bottom.map((imageName) => (
                <img
                  key={imageName.name}
                  src={`${process.env.PUBLIC_URL}/images/${imageName.name}`}
                  alt="Imagessss"
                />
              ))}
              <span> STORE </span>
            </div>
          </div>
        </div>
        <div className="journey-application-container journey-dialog">
          <span>EXPOSE</span>
          <div className="card-dailog-bottom">
            <div className="card-dailog-left">
              <div className={`card-stuff-img1`}>
                <Card tableData={workExperience} />
              </div>
              <img src={ArrowDown} />
              <div className={`card-stuff-img4`}>
                <Card tableData={factsTable} />
              </div>
            </div>
            <div className="card-dailog-right">
              <div className={`card-stuff-img2`}>
                <Card tableData={certificate} />
              </div>
              <div className={`card-stuff-img3`}>
                <Card tableData={projects} />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Journey;




