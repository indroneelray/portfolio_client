import React from "react";
import Fade from "react-reveal/Fade";
import Photo1 from "../assets/photography/photo1.png";
import Photo2 from "../assets/photography/photo2.png";
import Photo3 from "../assets/photography/photo3.png";
import Photo4 from "../assets/photography/photo4.png";
import Photo5 from "../assets/photography/photo5.png";
import Photo6 from "../assets/photography/photo6.png";
import Photo7 from "../assets/photography/photo7.png";
import Photo8 from "../assets/photography/photo8.png";
import Photo9 from "../assets/photography/photo9.png";
import Photo10 from "../assets/photography/photo10.png";
import Photo11 from "../assets/photography/photo11.png";
import Photo12 from "../assets/photography/photo12.png";
import Photo13 from "../assets/photography/photo13.png";
import Photo14 from "../assets/photography/photo14.png";

export default function Photography() {
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
    Photo13,
    Photo14,
  ];

  return (
    <div className="photography container-fluid w-80 px-5">
      <Fade bottom>
        <div className="w-80 container">
            {images.map(image=>(<div className="image-container"><img src={image} /></div>))}
        </div>
      </Fade>
    </div>
  );
}
