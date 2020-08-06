import React from "react";
import Project from "../components/project";
import Header from "../components/header";
const portfolio = () => {
  return (
    <div>
      <Header />
      <div class="container mainbody">
        <section class="col-sm-8 border">
          <section class="row border-bottom">
            <h2>Portfolio</h2>
          </section>
        </section>
        {/* Here is where projects go */}
      </div>
      <footer class="fixed-bottom">
        <p class="cprt">@ Copyright</p>
      </footer>
    </div>
  );
};

export default portfolio;
