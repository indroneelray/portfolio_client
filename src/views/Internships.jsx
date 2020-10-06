import React from "react";
import { internshipAssets } from "../constants";
import Fade from "react-reveal/Fade";
export default function Internships() {
  return (
    <div className="internships container-fluid w-80 px-5">
      <Fade bottom>
        <div className="w-100">
          <div className="row  universe-row">
            <div className="col-12 col-md-6 text-right">
              <img className="universe-image" src={internshipAssets.universe} />
            </div>
            <div className="col-12 col-md-6 text-left">
              <div className="w-60">
                <h4>Team Youniverse</h4>
                <p>Media Consultant and Mentor</p>
                <p>
                  I worked with Youniverse for over 18 months. I started as a
                  photographer and a social media consultant. Later, I hosted
                  conferences on Failure Resumes and mentored some of the new
                  interns. Here’s a glimpse of the moments I captured!
                </p>
              </div>
            </div>
          </div>

          <div className="internship-images-container">
            {internshipAssets.bulkImages.map((item) => (
              <img src={item} />
            ))}
          </div>

          <div className="row boxes-row">
            <div className="col-12 col-md-6">
              <div className="box">
                <img src={internshipAssets.foundation} alt="" />
                <h4>The CKS Foundation</h4>
                <div>
                <p>Volunteer</p>
                <p>
                  Taught Math and English to underprivileged children from grade
                  6 to 9.
                </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="box">
                <img src={internshipAssets.cad} alt="" />
                <div><h4>CaddMan</h4>
                <p>3D Designer</p>
                <p>
                  Assisted in designing 3D models and printing ABS plastic or
                  Nylon prototypes for Caddman’s clients
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
