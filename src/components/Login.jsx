import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [Username,setUsername]=useState();
  const [Email,setEmail]=useState();
  const [Password,setPassword]=useState();
const nav=useNavigate()
  const Handlesubmit=(e)=>{
    e.preventDefault();
  if(Email=="admin@gmail.com" && Password=="12345"){
nav('/')
  }
    console.log(Username,Password);
  }
    return(
     <div className="login-form">
     <div className="inner-form">
     <form onSubmit={Handlesubmit} >
    <div className="inside-form">
      <h2 style={{textAlign:"center"}}>LOGIN </h2>
         <label>EMAIL</label>
    <div> 
    <input type="text" value={Email}  onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>
    <label>PASSWORD</label>
        <div>
        <input type="text"  value={Password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button className="btn btn-primary">Login</button>
    </div>
      </form>
     </div>
     </div>
    )
}