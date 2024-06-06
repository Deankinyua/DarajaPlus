import "../styling/home.css";
import "../styling/caseStudies.css";
import VideoService from "../services/VideoService";
import harpicVideo2 from "../videos/HARPIC Door to Door.mp4";
// import myImage from "../assets/PhotoShot_1710670139026.jpeg";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
// import { RiGroupFill } from "react-icons/ri";

const CaseStudies = () => {
  return (
    <div>
      {/* <Link to={"/"}>
        <div className="logoContainerRoot">
          <RiGroupFill fill="var(--primary)" fontSize={"2rem"} />
          <div className="imgContainer">
            <img src={myImage} alt="Daraja Logo" height={200} width={200} />
          </div>
        </div>
      </Link> */}
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
