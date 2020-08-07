import React from "react";
import Project from "../components/project";
import Header from "../components/header";
const portfolio = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container mainbody">
        <section className="col-sm-8 border">
          <section className="row border-bottom">
            <h2>Portfolio</h2>
          </section>
        </section>
        {/* Here is where projects go */}
      </div>
      <footer className="fixed-bottom">
        <p className="cprt">@ Copyright</p>
      </footer>
    </div>
  );
};

export default portfolio;
