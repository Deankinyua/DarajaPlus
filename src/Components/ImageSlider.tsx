import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
  ImageUrls: string[];
};

const ImageSlider = ({ ImageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) return ImageUrls.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === ImageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  // setInterval(showNextImage, 3000);

  return (
    <div className="imageSlider">
      {" "}
      <div className="parent-img-slider-img">
        {ImageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="achievements"
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button onClick={showPreviousImage} className="img-slider-btn leftbtn ">
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="img-slider-btn rightbtn">
        <ArrowBigRight />
      </button>
      <div className="buttonSlider">
        {ImageUrls.map((_, index) => (
          <button
            key={index}
            className="btn-slider-btn"
            onClick={() => {
              setImageIndex(index);
            }}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
