import React  from "react";
import web from "../src/images/1.jpg";
const Cardservice=(props)=>{
return(
    <>
   
   
          
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                        <img src={props.imgsrc}className="img-fluid"/>
                        <div  className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text"></p>
                            <a href=""className="btn btn-primary">Go Somewhere</a>
                        </div>
                    </div>
                </div>
           
          
    </>
)
}
export default Cardservice;