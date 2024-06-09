import { useEffect } from "react";
import Cards from "../Components/Cards";
import ImageSlider from "../Components/ImageSlider";
import { IMAGES } from "../services/ImageService";
import VideoService from "../services/VideoService";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import myImage from "../assets/FotoJet (1).png";

import { Heading } from "@chakra-ui/react";

// ? Styles Import
import "../styling/home.css";
import "../styling/imageSlider.css";

// ? Video import
import harpicVideo from "../videos/HARPIC Door to Door.mp4";

const Home = () => {
  useEffect(() => {
    const el = document.querySelector(".typewriter")!;

    const phrases = ["COMMUNICATES|", "CHANGES|", "COLLABORATES|"];

    let cursorPhraseIndex = 0;

    const sleepTime = 100;

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const writeLoop = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const cursorWord = phrases[cursorPhraseIndex];

        for (let i = 0; i < cursorWord.length; i++) {
          el.textContent = cursorWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 6);

        for (let i = cursorWord.length; i > 0; i--) {
          el.textContent = cursorWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 6);

        if (cursorPhraseIndex === phrases.length - 1) {
          cursorPhraseIndex = 0;
        } else {
          cursorPhraseIndex += 1;
        }
      }
    };
    writeLoop();
  }, []);

  return (
    <div className="home">
      <div className="firstSection1 overlay1">
        <div className="headerSection">
          <header>
            <label className="hamburger-menu">
              {" "}
              <input type="checkbox" id="checkbox" />{" "}
            </label>

            <nav className="nav-bar">
              <NavLink to={"/"} className={"chatlink"}>
                HOME
              </NavLink>
              <NavLink to={"about"} className={"chatlink"}>
                ABOUT
              </NavLink>
              <NavLink to={"culture"} className={"chatlink"}>
                CULTURE
              </NavLink>
              <NavLink to={"caseStudies"} className={"chatlink"}>
                CASE STUDIES
              </NavLink>
            </nav>
          </header>
        </div>

        <div className="writerContainerMain">
          <div>
            {/* <div className="writerContainer"> */}
            <h2 className="typewriterHeading">
              <div className="logoContainerRoot">
                <div className="imgContainer">
                  <img src={myImage} alt="Daraja Logo" />
                </div>
              </div>
              <br /> <span className="typewriter"></span>
              <span className="cursor"></span>
            </h2>{" "}
            {/* </div> */}
            {/* <div className="quote"> */}
            <p className="typewriterHeading">
              <FaQuoteLeft fill="white" />
              We are not your typical marketing agency. At Daraja, we’re all
              about strategic thinking and creative execution. From digital to
              on-ground activations, we bring a unique touch to every project.
              <FaQuoteRight fill="white" />
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="firstSection">
        <Heading size={"2xl"} fontSize={"3.5rem"}>
          Unlock Your
          <span className="companyName">Brand's</span> Potential with Our Unique
          <span className="companyName">Approach</span>
        </Heading>
        <p>
          Our dedication to increasing numbers has been the primary reason why
          we are trusted by the biggest brands. But what really sets us apart?
          Our commitment to brand campaigns with a purpose. We’re here to make
          waves and make them count!
        </p>
      </div>

      <div className="videoContainer">
        <VideoService videoName={harpicVideo} />
      </div>
      <div className="intro">
        <Heading size={"2xl"} fontSize={"3.5rem"}>
          Award-Winning
          <span className="companyName">Marketing and Communication</span>Agency
        </Heading>
      </div>
      <div className="home-imageSlider">
        <ImageSlider ImageUrls={IMAGES} />
      </div>
      <div className="workEthic">
        <div className="workEthicChild">
          <h1 className="services">What We Offer</h1>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
