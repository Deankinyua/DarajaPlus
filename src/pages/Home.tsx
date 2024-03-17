import { useEffect } from "react";
import Cards from "../Components/Cards";
import ImageSlider from "../Components/ImageSlider";
import { IMAGES } from "../services/ImageService";
import VideoService from "../services/VideoService";

import { Heading } from "@chakra-ui/react";

// ? Styles Import
import "../styling/home.css";
import "../styling/imageSlider.css";

// ? Video import
import harpicVideo from "../videos/World Toilet Day - Harpic Kenya.mp4";

const Home = () => {
  useEffect(() => {
    const el = document.querySelector(".typewriter")!;

    const phrases = ["Communicating", "Changing", "Collaborating"];

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
      <div className="firstSection">
        <Heading size={"2xl"} fontSize={"3.5rem"}>
          Holding your <span className="companyName">Hand</span> every Step of
          the <span className="companyName">Way</span>
        </Heading>
        <p>
          We are not your typical marketing agency. At Daraja, we’re all about
          strategic thinking and creative execution. From digital to on-ground
          activations, we bring a unique touch to every project. But what really
          sets us apart? Our commitment to brand campaigns with a purpose. We’re
          here to make waves and make them count!
        </p>
      </div>

      <div className="writerContainer">
        <h2 className="typewriterHeading">
          We are Dedicated to <br /> <span className="typewriter"></span>
          <span className="cursor">|</span>
        </h2>{" "}
      </div>
      <div className="videoContainer">
        <VideoService videoName={harpicVideo} />
      </div>
      <div className="intro">
        <h1> Award-Winning Marketing and Communication Agency</h1>
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
