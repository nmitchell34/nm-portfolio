import React from "react";
import Header from "../components/header";
const contact = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container" style={{ backgroundColor: "transparent" }}>
        <section className="row">
          <section className="col-sm-8 border">
            <section className="row">
              <br />
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScEt40eugZ_n0nvB30QPrYaYh8Wsjo7pZzdVvnGoKLe6z3JDA/viewform?embedded=true"
                width="640"
                height="709"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default contact;
