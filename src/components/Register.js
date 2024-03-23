import React, { useEffect, useState } from 'react'
import style from './CSS/Register.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import * as EmailValidator from 'email-validator';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
  
  const navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("");
  const [emailStatus,setEmailStatus]  = useState('')
  const [password,setPassword] = useState();
  const [pwStatus,setPwStatus] = useState(-1)
  const [userStatus,setUserStatus] =useState(-1);
  const [signStatus,setSignStatus] = useState(0);

  useEffect(()=>{
    if(userStatus !== -1){
      if(username.length){
        setUserStatus(1);
      }else{
        setUserStatus(0);
      }
    }
  },[username])
  useEffect(()=>{
    if(email.length > 0){
      if(EmailValidator.validate(email)){
        setEmailStatus('valid');
      }else{
        setEmailStatus('invalid');
      }
    }
  },[email])

  useEffect(()=>{
    if(pwStatus !== -1){
      if((password.length) < 8){
        setPwStatus(0);
      }else{
        setPwStatus(1);
      }
    }
  },[password])

  const registerUser = async ()=>{
    
    
      axios.post("http://localhost:8000/user/register", { username, email,password })
        .then((response) => {
          console.log(response)
          setSignStatus(1)
          setTimeout(() => {
            navigate("../");
          }, 1000);
  
        })
        .catch(function (error) {
        setSignStatus(-1);
        setTimeout(() => {
        setSignStatus(0);

        setUsername("")
        setEmail("")
        setPassword("")
        const inputs = document.getElementsByClassName('Field');
        inputs[0].value=""
        inputs[1].value = ""
        inputs[2].value=""
        }, 1000);
        });
    }
  


  return (
    <div className={style.Back}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.text}>Sign Up</div>
          <div className={style.underline}></div>
        </div>

        <div className={style.inputs}>

        <div className={style.User}>
        <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-user"></i>
            </div>
            <input className="Field" type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} onFocus={()=>setUserStatus(0)}/>
          </div>
          {userStatus===0 && <div className={style.einput}>Username can't be empty!</div>}
         
        </div>
   
          <div className={style.Email}>
          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input className="Field" type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> 
          </div>
          {emailStatus==='invalid' && <div className={style.einput}>Entered email is not valid !!</div>}
          {/* {emailStatus==='valid' && <div className={style.sinput}>Entered email is valid!</div>} */}
          </div>

          <div className={style.Password}>
          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-lock"></i>
            </div>
            <input className="Field" type="password" placeholder='Password' onFocus={()=> pwStatus===-1 && setPwStatus(0) } onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          {pwStatus===0 && <div className={style.einput}>Password must be at least 8 characters long!</div>}
          {/* {pwStatus===1 && <div className={style.sinput}>Good to go!</div>} */}
          </div>
          
        </div>

        <div className={style.submit} onClick={registerUser}>Sign Up</div>
        {signStatus===-1 && <div className={style.einput}>Email already exist </div> }
        {signStatus===1 && <div className={style.sinput}>Successfully sign up...</div> }
      </div>
    </div>
  )
}

export default Register