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
            {images2.map((imageName) => (
              <img
                key={imageName}
                src={`${process.env.PUBLIC_URL}/images/${imageName}`}
                alt="Imagessss"
              />
              //console.log(`${process.env.PUBLIC_URL}/images/${imageName}`)
            ))}
          </div>
        </div>
        <div className="journey-application-container journey-dialog">
          <span style={{ fontWeight: 600 }}>EXPOSE</span>
          <div className="card-dailog-bottom">
            <div className="card-dailog-left">
              <div className={`card-stuff-img1`}>
                <Card tableData={workExperience} />
              </div>
              <img src="https://img.icons8.com/small/64/one-to-many.png" />
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
