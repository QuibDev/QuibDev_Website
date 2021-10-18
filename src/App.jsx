import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import certificates from "./Pages/Certificates";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Work from "./Pages/Work";
import MailSent from "./Pages/Mail-sent-success";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/certificates" component={certificates} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/success" component={MailSent} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
