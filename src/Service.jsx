import React  from "react";
import web from "../src/images/1.jpg"
import Cardservice from "./Cardservice";
import Cardata from "./Cardata";
const Service=()=>{
return(
    <>
  <div className="my-5">
       <h1 className="text-center">Our Services</h1>
   </div>
   <div className="container-fluid mb-5">
       <div className="row">
           <div className="col-lg-10 mx-auto">
           
            <div className="row gy-4">
               {
                   Cardata.map((val,ind)=>{
                       return <Cardservice imgsrc={val.imgsrc}
                       title={val.title}
                      />
                   })
               }
            </div>
            </div>
            </div>
            </div>
      
    </>
)
}
export default Service;