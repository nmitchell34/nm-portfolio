import React from "react";
import Header from "../components/header";
const index = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container">
        {/* <section className="row"> */}
        <section className="col-sm-8 border">
          <section className="row border-bottom">
            <h2>About Me</h2>
          </section>
          <section className="row">
            <br />
            <section className="col-sm-4">
              <section className="row">
                <img
                  src="./Images/IMG_7368[6565].jpeg"
                  className="rounded float-left"
                  width="100%"
                  // height="100%"
                />
              </section>
              <section className="row">
                Email: ncm297@gmail.com
              </section>
              <section className="row">
                <a href="https://github.com/nmitchell34">GitHub</a>
              </section>
              <section className="row">
                <a href="https://www.linkedin.com/in/nick-mitchell-40a028193/">
                  LinkedIn
                </a>
              </section>
            </section>
            <section className="col-sm-8">
              <p>
                Hello! My name is Nick Mitchell, I'm a 22 year old who just
                graduated from Georgia Tech with a B.S. in Materials Science. In
                order to continue learning and gaining valuable skills during
                the COVID 19 pandemic I decided to take this boot camp.
              </p>
              {/* </section> */}
              <p>
                I hope to learn to build websites and apps from scratch and to
                become deeply knowledgeable about a variety of development
                tools. I believe that this will make me more competitive as a
                potential hire and will give me valuable skills should I ever
                try and start my own business.
              </p>
            </section>
          </section>
        </section>
      </div>
      <footer>
        <p className="cprt">@ Copyright</p>
      </footer>
    </div>
  );
};

export default index;
