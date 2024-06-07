import "../styling/culture.css";
import culture1 from "../../culture/the-colony-962x1024.jpg";
import culture2 from "../../culture/brainstorm.jpg";
import culture3 from "../../culture/fun.jpg";
import culture4 from "../../culture/nature.jpg";
import culture5 from "../../culture/competition-768x1024.jpg";
import culture6 from "../../culture/celebration.jpg";
import { Link } from "react-router-dom";
// import myImage from "../assets/darajalogo.png";

import { AiOutlineDoubleLeft } from "react-icons/ai";

const Culture = () => {
  return (
    <div className="culture">
      <Link to={"/"}>
        <div className="backbutton">
          <AiOutlineDoubleLeft />
          <AiOutlineDoubleLeft />
        </div>
      </Link>
      <div className="section">
        <div className="text-culture">
          <h1>
            We are <span>The Colony</span>
          </h1>
          <p>
            The colony is diverse, with members of different backgrounds, skills
            and talents. Just like an ant colony, we are resilient, committed
            and constantly working together to achieve desired results. We
            understand the value of hard work and pushing till the end as a
            committed, diligent, willing and strategic team. We accomplish more
            together, always remembering the big picture.
          </p>
        </div>
        <div className="img-container">
          <img src={culture1} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text-culture">
          <h1>
            Brainstorm at <span>The Colony</span>
          </h1>
          <p>
            Brainstorms are so important to us! We put our brilliant minds
            behind every concept we come up with, to foster creativity, generate
            innovative ideas, and collaborate for greatness!
          </p>
        </div>
        <div className="img-container">
          <img src={culture2} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text-culture">
          <h1>
            Nature with <span>The Colony</span>
          </h1>
          <p>
            Nature isn’t just a backdrop for us; it’s a stage to unleash our
            boundless passion and energy. Stepping out isn’t just a break from
            the office—it’s a grand entrance into a world filled with
            unforgettable experiences.
          </p>
        </div>{" "}
        <div className="img-container">
          <img src={culture4} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text-culture">
          <h1>
            Celebration at <span>The Colony</span>
          </h1>
          <p>
            At the Colony, celebration, creativity, and joy are the heartbeat of
            our spirit. We don’t just work; we dance through challenges, share
            victories, and cherish every moment as a masterpiece in the making.
          </p>
        </div>
        <div className="img-container">
          <img src={culture6} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text-culture">
          <h1>
            Play at <span>The Colony</span>
          </h1>
          <p>
            All work with no play makes the colony dull. In our world, breaks
            are not just pauses; they’re opportunities for rejuvenation and
            inspiration. Whether it’s a quick game, a shared laugh, or a
            spontaneous moment of creativity, we understand that these elements
            are essential to fueling our productivity and maintaining a dynamic
            & engaging atmosphere.
          </p>
        </div>
        <div className="img-container">
          <img src={culture3} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text-culture">
          <h1>
            Competition at <span>The Colony</span>
          </h1>
          <p>
            The perfect end to competition is the sweet taste of victory! At the
            Colony, our adventures unfold, and as competition starts, the reward
            isn’t just a win, but the realization of our strengths and
            potential.
          </p>
        </div>
        <div className="img-container">
          <img src={culture5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Culture;
