import React from "react";
import About from "./About";
import Pdata from "./Pdata";
import "./index.css";
function Skills(){
    return(
<>
<section className="about">
        <div className="row">
        <div className="col-lg-2  offset-1">
        <h3>Skills</h3>
        </div>
        <div className="col-lg-8">
            <h2>Programming Languages</h2>
            <p>Worked primarily with JavaScript, Python and C++, with frameworks such as Express.js, Koa.js, React.js, Django and Flask.</p>
            
            <p>Interested in functional programming and serverless architectures, exploring with Erlang and AWS Lambda respectively.</p>
           
            </div>
            </div>
            </section>
            
</>
    );
}
export default Skills;