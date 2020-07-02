import React, { useState }  from "react";
const Contact=()=>{
    const [data,setData]=useState({
        fullname:'',
        mobile:'',
        email:'',
        msg:''
    })
    const Inputevent=(event)=>{
        const{name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }
    const formsubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}.my mobile number is ${data.mobile}.my email is ${data.email}.my msg is ${data.msg}`)
    };
return(
    <>
   <div className="my-5">
       <h1 className="text-center">Contact US</h1>
   </div>
   <div className="container contact_div">
       <div className="row">
           <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={formsubmit}>
                   <div className="mb-3">
                       <label className="form-label">Full Name</label>
                       <input type="text"className="form-control"name="fullname"value={data.fullname}onChange={Inputevent}placeholder="Enter your name"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Enter your mobile no</label>
                       <input type="text"className="form-control"name="mobile"value={data.mobile}onChange={Inputevent}placeholder="Enter your mobile no"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Email Address</label>
                       <input type="email"className="form-control"name="email"value={data.email}onChange={Inputevent}placeholder="example@gmail.com"/>
                   </div>
                   <div className="mb-3">
                       <label className="form-label">Message</label>
                       <textarea className="form-control"name="msg"value={data.msg}onChange={Inputevent}></textarea>
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