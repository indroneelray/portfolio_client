import React from "react";
import DhruvDP from "../assets/dhruvdp.svg";
import Fade from "react-reveal/Fade";

export default function Homepage() {
  return (
    <div className="homepage container-fluid w-80 px-5 position-relative">
      {/* <Fade bottom> */}
        <div className="row intro-row w-100 mx-auto container align-items-center">
          <div className="col-12 col-lg-4">
            <img src={DhruvDP} />
          </div>
          <div className="col-12 col-lg-8 mt-n5">
            <h1 className="rubik"> Hello!</h1>
            <hr className="hr" />
            <h2 className="gelasio">Welcome to my portfolio</h2>
          </div>
        </div>
      {/* </Fade> */}

      <div className="floating-icons">
        <span className="position-relative email">
          <i class="fa fa-envelope"></i> {" "}
          {/* <strong> Dhruvmc23@gmail.com </strong> */}
        </span>
        <br />
        <span className="position-relative instagram">
          <i class="fa fa-instagram"></i> 
          {/* <strong> Dhruvm_23</strong> */}
        </span>
        <br />
        <span className="position-relative phone">
          <i class="fa fa-phone"></i> {" "}
          {/* <strong>+91 9711450509</strong>{" "} */}
        </span>
      </div>
    </div>
  );
}
