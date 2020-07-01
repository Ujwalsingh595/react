import React  from "react";
const Contact=()=>{
return(
    <>
   <div className="my-5">
       <h1 className="text-center">Contact US</h1>
   </div>
   <div className="container contact_div">
       <div className="row">
           <div className="col-md-6 col-10 mx-auto">
               <form>
                   <div className="mb-3">
                       <label className="form-label">Full Name</label>
                       <input type="text"className="form-control"placeholder="Enter your name"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Enter your mobile no</label>
                       <input type="text"className="form-control"placeholder="Enter your mobile no"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Email Address</label>
                       <input type="email"className="form-control"placeholder="example@gmail.com"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Message</label>
                       <textarea className="form-control"></textarea>
                   </div>
                   <button className="btn btn-outline-primary">Contact us</button>
               </form>
           </div>
       </div>
   </div>
    </>
)
}
export default Contact;