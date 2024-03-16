import myimage1 from "../assets/daraja1.png";
import myimage2 from "../assets/daraja2.png";
import myimage3 from "../assets/daraja3.png";
import myimage4 from "../assets/daraja4.png";

type ImageProps = {
  imageName: string;
  years: string;
  description: string;
};

export const imageArray: ImageProps[] = [
  {
    imageName: myimage1,
    years: "10+",
    description: "Years Of Experience",
  },
  {
    imageName: myimage2,
    years: "50+",
    description: "Clients Handled",
  },
  {
    imageName: myimage3,
    years: "3",
    description: "Countries Located In ",
  },
  {
    imageName: myimage4,
    years: "200+",
    description: "Projects Handled",
  },
];
