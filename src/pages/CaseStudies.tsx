import "../styling/home.css";
import "../styling/caseStudies.css";
import VideoService from "../services/VideoService";
import harpicVideo2 from "../videos/HARPIC Door to Door.mp4";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  // Link,
} from "@chakra-ui/react";
// import { AiOutlineDoubleLeft } from "react-icons/ai";

const CaseStudies = () => {
  return (
    <div className="casestudies">
      {/* <div>
        <Link to={"/"}>
          <div className="backbutton">
            <AiOutlineDoubleLeft />
            <AiOutlineDoubleLeft />
          </div>
        </Link>
      </div> */}
      <div className="videoContainer">
        <VideoService videoName={harpicVideo2} />
      </div>

      <div className="stat-container">
        <div className="stat-item">
          <div className="stat-item-child">
            <Stat size={"2.5xl"}>
              <StatNumber>300,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
              <StatLabel>Consumers Reached</StatLabel>
            </Stat>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-item-child">
            <Stat size={"2.5xl"}>
              <StatNumber>245,000</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                9.05%
              </StatHelpText>
              <StatLabel>Consumers Reached</StatLabel>
            </Stat>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
