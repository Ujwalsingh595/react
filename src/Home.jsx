import React  from "react";
import web from "../src/images/2.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home=()=>{
return(
    <>
   <Common name="Grow your  business"visit="/service"btname="Get Started"imgsrc={web}/>
    </>
)
}
export default Home;