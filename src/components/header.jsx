import React from "react";

const header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container">
        <h1 class="navbar-brand">Nick Mitchell</h1>
        <button
          class="navbar-toggler my-2 my-lg-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon navbar-light bg-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto float-right text-right pr-3">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">
                About{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="./Files/Nicholas C Mitchell - BSMSE Georgia Tech 2020.pdf"
              >
                Resume <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="./portfolio.html">
                Portfolio <span class="sr-only" />
                (current)
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html">
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;
