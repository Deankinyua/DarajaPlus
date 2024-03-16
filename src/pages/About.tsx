import { imageArray } from "../services/aboutImage";

const About = () => {
  return (
    <div className="projectsContainer">
      {imageArray.map((element) => (
        <>
          <div className="arrayImages">
            <img src={element.imageName} alt="daraja" />
          </div>
          <div>{element.years}</div>
          <div>{element.description}</div>
        </>
      ))}
    </div>
  );
};

export default About;
