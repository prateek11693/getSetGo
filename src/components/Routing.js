import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

import Contact from "./Contact";
import MemoryDetails from "./MemoryDetails";

const Routing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/memories/:id" component={MemoryDetails} />
      </BrowserRouter>
    </Fragment>
  );
};
export default Routing;
