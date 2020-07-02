import React  from "react";
import web from "../src/images/3.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About=()=>{
return(
    <>
   <Common name="Welcome to About Page"visit="/contact"btname="Contact now"imgsrc={web}/>
    </>
)
}
export default About;