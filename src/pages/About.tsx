import Marquee from "react-fast-marquee";
import { CLIENTS } from "../services/ClientService";
import { imageArray } from "../services/aboutImage";
import "../styling/about.css";

import { Card, Heading, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const About = () => {
  return (
    <div className="about-wrapper">
      <Link to={"/"}>
        <div className="backbutton">
          <AiOutlineDoubleLeft />
          <AiOutlineDoubleLeft />
        </div>
      </Link>
      <div className="about-intro">
        <Heading size={"2xl"} fontSize={"2.2rem"}>
          <span className="companyName">THE DARAJA PLUS STORY</span>{" "}
          <h2>Get To Know Us</h2>
        </Heading>

        <Highlight
          query={[
            "average",
            "ground-shaking",
            "dedicated",
            "Daraja Plus",
            "2015",
          ]}
          styles={{ color: "#794ff1" }}
        >
          We’re not your average marketing and communications company. We’re a
          team of innovators on a mission to reshape consumer behavior. From
          digital dynamism to ground-shaking activities, we bring brands to life
          with impact. Our secret? We’re not just about campaigns, we’re about
          causes. Positive social impact is the core of everything we do. Behind
          Daraja Plus – We are a team of dedicated experts, each bringing their
          unique spark to every project. Since 2015, we’ve been rewriting the
          playbook, proudly steering brands toward success.
        </Highlight>
      </div>

      <section className="background_section">
        <div className="background_text">
          <div className="text_container_bottom">
            <Heading color={"#ffff"} fontSize={"3.5rem"}>
              Get to Know Us and What Inspires Us
            </Heading>
          </div>
        </div>
      </section>

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

      <div className="clientsList">
        <div>
          <Heading size={"1xl"} color={"#794ff1"} fontSize={"2.5rem"}>
            Our Clients:
          </Heading>
        </div>
      </div>

      <Marquee pauseOnClick={true} speed={15}>
        <div className="brandsContainer">
          {CLIENTS.map((client) => (
            <div className="imgMarque clientContainer">
              <img src={client} alt="" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default About;
