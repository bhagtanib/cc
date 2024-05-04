import { Balance } from "@mui/icons-material";
import Card from "./Card";
import "./Journey.css";
import { images1, images2 } from "./data";
import {
  workExperience,
  certificate,
  projects,
  factsTable,
} from "./data/tabledetails";
import ArrowDown from "./images/arrowDown.png";
import ArrowLeft from "./images/arrowLeft.png";
const Journey = () => {
  const tables = [];
  return (
    <div className="journey-page">
      <h1>From Source to Solution: Visualizing My Data Journey </h1>
      <div className="journey-container">
        <div className="journey-knowledge-container journey-dialog">
          <span style={{ fontWeight: 600 }}>KNOWLEDGE SOURCE</span>
          <div className="journey-dialog-images">
            {images1.map((imageName) => (
              <img
                key={imageName}
                src={`${process.env.PUBLIC_URL}/images/${imageName}`}
                alt="Imagessss"
              />
              //console.log(`${process.env.PUBLIC_URL}/images/${imageName}`)
            ))}
          </div>
        </div>
        <div className="journey-mid-container journey-dialog">
          <span style={{ fontWeight: 600 }}>ORCHESTRATE</span>
          <div className="journey-dialog-images">
            <div className="journey-dialog-images-mid-top">
              {images2.top.map((imageName) => (
                <img
                  key={imageName}
                  src={`${process.env.PUBLIC_URL}/images/${imageName}`}
                  alt="Imagessss"
                />
              ))}
              <span> footer of this block</span>
            </div>

            <div className="journey-dialog-images-mid-bottom">
              {images2.bottom.map((imageName) => (
                <img
                  key={imageName}
                  src={`${process.env.PUBLIC_URL}/images/${imageName}`}
                  alt="Imagessss"
                />
              ))}
              <span> footer of this block</span>
            </div>
          </div>
        </div>
        <div className="journey-application-container journey-dialog">
          <span style={{ fontWeight: 600 }}>EXPOSE</span>
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
            {/* <img className="arrow-left" src = {ArrowLeft} /> */}
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
