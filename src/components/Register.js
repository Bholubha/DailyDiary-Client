import React, { useEffect, useState } from 'react'
import style from './CSS/Register.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import * as EmailValidator from 'email-validator';

function Register() {
  const [email,setEmail] = useState("");
  const [emailStatus,setEmailStatus]  = useState('')
  const [password,setPassword] = useState();
  const [pwStatus,setPwStatus] = useState(-1)
  
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


  return (
    <div className={style.Back}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.text}>Sign Up</div>
          <div className={style.underline}></div>
        </div>

        <div className={style.inputs}>
          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-user"></i>
            </div>
            <input type="text" placeholder='Username' />
          </div>
          <div className={style.Email}>
          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> 
          </div>
          {emailStatus==='invalid' && <div className={style.einput}>Entered email is not valid !!</div>}
          {emailStatus==='valid' && <div className={style.sinput}>Entered email is valid!</div>}
          </div>
          <div className={style.Password}>
          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-lock"></i>
            </div>
            <input type="password" placeholder='Password' onFocus={()=> pwStatus===-1 && setPwStatus(0) } onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          {pwStatus===0 && <div className={style.einput}>Password must be at least 8 characters long!</div>}
          {pwStatus===1 && <div className={style.sinput}>Good to go!</div>}
          </div>
          
        </div>

        <div className={style.submit}>Sign Up</div>
      </div>
    </div>
  )
}

export default Register