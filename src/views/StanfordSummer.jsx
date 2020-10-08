import React from "react";
import Fade from "react-reveal/Fade";
import Video from '../assets/video.mp4'

export default function StanfordSummer() {
  return (
    <div className="stanford-summer  w-100 position-relative">
      <Fade bottom>
        <div className="overview-section">
          <div className="w-80 mx-auto">
            <h3>Overview</h3>
            <p>
              The Stanford Summer Program was an 8-week-long transformative
              educational experience. I got the opportunity to learn alongside
              students from all over the world- majority of whom were currently
              sophomores or seniors at the university- and interact with
              renowned professors. I enrolled in 10 units:
            </p>

            <ol>
              <li>
                Introduction to Formal Methods in Contemporary Philosophy with
                Professor Michael Cohen (3 units)
              </li>
              <li>
                Smart Cities and Communities with Professor Richard Lechner (3
                units)
              </li>
              <li>
                Introduction to Probability and Statistics for Engineers with
                Professor Vadim Khayms (4 units)
              </li>
            </ol>
          </div>
        </div>

        <div className="formal-methods">
          <div className="w-80 mx-auto">
            <h3>Introduction to Formal Methods in Contemporary Philosophy</h3>
            <div className="row">
              <div className="col-12 col-md-6">
               <p> This course dealt with techniques of contemporary philosophy and
                formal logic being used to systematically tackle foundational
                problems related to value, inquiry, mind and reality. The
                material covered is also useful preparation for certain topics
                in mathematics, computer science, linguistics, economics and
                statistics.</p>
              </div>
              <div className="col-12 col-md-6">
               <p> Between paradoxical discussions with Professor Cohen and
                challenging weekly papers, I gained a whole new appreciation for
                precise thinking. Combining the scores of the weekly assignments
                and the final paper, I received an A (on a scale of A-D) at the
                end of the course.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="smart-cities">
          <div className="w-80 mx-auto">
            <h3>Smart Cities and Communities</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  This class was about how a city is a complex system of people.
                  We went over several case studies and plans where “Smart City
                  Solutions” are used to increase efficiency, improve the public
                  services efficacy, and assure community sustainability.
                  Professor Lechner helped us understand how these systems are
                  more than just technology and curating them requires one to
                  borrow from various disciplines. Moreover, we had panel
                  discussions where leading smart city architechts shared their
                  experiences.
                </p>

                <p>
                  For our project, first we had to identify a problem in our
                  city and submit a Request For Innovation, then, a Project
                  Proposal Paper explaining how we suggest to solve this problem
                  in detail and finally, a Proposal Video advertising our
                  solution.
                </p>
                <p>
                  My project was voted first in class by a wide margin, I
                  recieved an A (on a scaled of A-D) and a $25 gift card from
                  Professor Lechner. Here’s the video!
                </p>
              </div>
              <div className="col-12 col-md-6">
                <video controls>
                    <source src={Video} />
                    </video>
              </div>
            </div>
          </div>
        </div>

        <div className="probability">
          <div className="w-80 mx-auto">
              <h3>Introduction to Probability and Statistics for Engineers</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  From random variables, independence, and conditional
                  probability to confidence intervals, hypothesis testing,
                  non-parametric tests, regression and correlation analyses; we
                  understood how engineers can improve effeciency, reliability
                  and quality of goods in all industries.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  I was the only high school student in a class filled with
                  undergraduates and graduates allowing me to learn a whole lot
                  of new stuff- both in and outside the classroom. I received a
                  B (on a scale of A, B, C, D) for this course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
