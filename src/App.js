import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,Switch, Redirect} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Menu from "./Menu";
import Footer from "./Footer";
const App=()=>{
    return (
        <>
        <Menu/>
        <Switch>
            <Route exact path="/"component={Home}/>
            <Route path="/about"component={About}/>
            <Route path="/service"component={Service}/>
            <Route path="/contact"component={Contact}/>
            <Redirect to="/"/>
        </Switch>
  <Footer/>
       
        </>
    );
};
export default App;