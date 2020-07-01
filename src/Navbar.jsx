import React from "react";
import "./index.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {BrowserRouter,Route} from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import {NavLink} from "react-router-dom";
function Navbar(){
    const heading ={
        color:"white",
        width:"250px",
        height:"250px"
    }
    return(
        <>
      
           <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
           <div className="container">
    <PermIdentityIcon style={{ fontSize: 60 ,color:"white"}}/>
           <a className="text-uppercase font-weight-bold navbar-brand"href="">Portfolio</a>
           <BrowserRouter>
               <ul className="navbar-nav ml-auto text-uppercase">
                   <li className="nav-item">
                   
                       <NavLink className="nav-link" to="/"activeClassName="active">Home</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to="About"activeClassName="active">About</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link"to="About"activeClassName="active">Work</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link"to="About"activeClassName="active">Education</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link"to="Skills"activeClassName="active">Skills</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link"to=""activeClassName="active">Portfolio</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link"to=""activeClassName="active">References</NavLink>
                   </li>
               </ul>
               </BrowserRouter>
               </div>
           </nav>
<div className="heading-style">
<div className="center-div">
         <h1 className=" text-white text-center"> Ujwal Singh</h1>
         <div className="icons">
        <LinkedInIcon style={{ fontSize: 50 ,color:"white"}}/>
        <FacebookIcon style={{ fontSize: 50 ,color:"white"}}/>
        <InstagramIcon style={{ fontSize: 50 ,color:"white"}}/>
        <TwitterIcon style={{ fontSize: 50 ,color:"white"}}/>
        </div>
         </div></div>
       
        </>
    );
}
export default Navbar;