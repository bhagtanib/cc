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
    <div>
      <h1>From source to solution: My Data Journey </h1>
      <div className="journey-container">
        <div className="journey-knowledge-container journey-dialog">
          <span style={{ fontWeight: 600 }}>Heading 1</span>
          {images1.map((imageName) => (
            <img
              key={imageName}
              src={`${process.env.PUBLIC_URL}/images/${imageName}`}
              alt="Imagessss"
            />
            //console.log(`${process.env.PUBLIC_URL}/images/${imageName}`)
          ))}
        </div>
        <div className="journey-mid-container journey-dialog">
          <span style={{ fontWeight: 600 }}>Heading 1</span>

          {images2.map((imageName) => (
            <img
              key={imageName}
              src={`${process.env.PUBLIC_URL}/images/${imageName}`}
              alt="Imagessss"
            />
            //console.log(`${process.env.PUBLIC_URL}/images/${imageName}`)
          ))}
        </div>
        <div className="journey-application-container journey-dialog">
          <div className={`card-stuff-img1`} >
            <Card tableData = {workExperience} />
          </div>
          <div className={`card-stuff-img2`} >
            <Card tableData = {certificate} />
          </div>
          <div className={`card-stuff-img3`} >
            <Card tableData = {projects} />
          </div>
          <div className={`card-stuff-img4`}>
            <Card  tableData = {factsTable} />
          </div>
          {/* {Array(4)
            .fill(4)
            .map((num, index) => (
              <div className={`card-stuff-img${index + 1}`}>
                <Card />
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Journey;
