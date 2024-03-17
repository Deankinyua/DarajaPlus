import Marquee from "react-fast-marquee";
import { CLIENTS } from "../services/ClientService";
import { imageArray } from "../services/aboutImage";
import "../styling/about.css";

import { Card } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <div className="about-intro">
        <h1>THE DARAJA PLUS STORY</h1> <h2>Get To Know Us</h2>
        <p>
          We’re not your average marketing and communications company. We’re a
          team of innovators on a mission to reshape consumer behavior. From
          digital dynamism to ground-shaking activities, we bring brands to life
          with impact. Our secret? We’re not just about campaigns, we’re about
          causes. Positive social impact is the core of everything we do. Behind
          Daraja Plus – We are a team of dedicated experts, each bringing their
          unique spark to every project. Since 2015, we’ve been rewriting the
          playbook, proudly steering brands toward success.
        </p>
      </div>
      <div className="projectsContainer">
        {imageArray.map((element) => (
          <div className="img-experience-container">
            <Card marginTop={"30px"} padding={"2rem"}>
              <div className="imageFlex">
                <div className="arrayImages">
                  <img src={element.imageName} alt="daraja" />
                </div>
                <div className="years">{element.years}</div>
                <div>{element.description}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Marquee pauseOnHover={true} speed={30} pauseOnClick={true}>
        <div className="brandsContainer">
          {CLIENTS.map((client) => (
            <div className="imgContainer clientContainer">
              <img src={client} alt="" />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default About;
