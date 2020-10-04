import React from "react";
import DhruvDP from "../assets/dhruvdp.svg";
import Fade from "react-reveal/Fade";

export default function Homepage() {
  return (
    <div className="homepage container-fluid w-80 px-5">
      <Fade bottom>
        <div className="row intro-row w-80 mx-auto container align-items-center">
          <div className="col-4">
            <img src={DhruvDP} />
          </div>
          <div className="col-8 mt-n5">
            <h1 className="rubik"> Hello!</h1>
            <hr className="hr" />
            <h2 className="gelasio">Welcome to my protfolio</h2>
          </div>
        </div>
      </Fade>
    </div>
  );
}
