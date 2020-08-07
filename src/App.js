import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Contact from "../src/views/contact";
import Portfolio from "../src/views/portfolio";
import Index from "../src/views/index";


function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </HashRouter>
  );
}

export default App;
