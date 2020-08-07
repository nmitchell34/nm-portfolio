import React from "react";

const header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <h1 className="navbar-brand">Nick Mitchell</h1>
        <button
          className="navbar-toggler my-2 my-lg-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-light bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto float-right text-right pr-3">
            <li className="nav-item">
              <a className="nav-link" href="./">
                About{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="./Files/Nicholas C Mitchell - BSMSE Georgia Tech 2020.pdf"
              >
                Resume <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./portfolio">
                Portfolio <span className="sr-only" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;
