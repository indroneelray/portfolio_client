import React from "react";
import Fade from "react-reveal/Fade";
import {photographs} from "../constants"


export default function Photography() {

  return (
    <div className="photography container-fluid w-80 px-5">
      <Fade bottom>
        <div className="w-80 container">
            {photographs.map(image=>(<div className="image-container"><img src={image} /></div>))}
        </div>
      </Fade>




      <div className="photo-brand">
        <p>Visit <br /> @worldwide_cosmonaut on Instagram for more!</p>
      </div>
    </div>
  );
}
