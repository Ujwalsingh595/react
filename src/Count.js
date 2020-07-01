import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Count(){
   var newtime=new Date().toLocaleTimeString();
    var[ctime,setime]=useState(newtime);
    function update(){
        var newtime=new Date().toLocaleTimeString();
        setime(newtime);   
    }
    return(<>
        <h1>{ctime}</h1>
        <button className="btn btn-success"onClick={update}>GET Time</button></>
    );
    }
export default Count