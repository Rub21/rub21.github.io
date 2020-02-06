import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

{
  /* <BrowserRouter basename={"/rub21.com"}> */
}

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <HashRouter> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={Page404} />
          {/* </HashRouter> */}
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
