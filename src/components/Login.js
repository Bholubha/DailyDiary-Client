import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import style from './CSS/Login.module.css'
import emailjs from '@emailjs/browser';

const Login = ({defineUser}) => {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [statuscode, setstatuscode] = useState(-1);
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(0);



  const createPost = async () => {
    console.log("hello win ")
    console.log(email)
    axios.post("https://daily-diary-backend.up.railway.app/user/login", { email, password })
      .then((response) => {
       
        if (response.data.verification) {
          defineUser(email);
          setstatuscode(1);
          console.log("verified");
          setTimeout(() => {
            navigate("../menubar");
          }, 1500);

        } else {

          console.log("not verified");
          setstatuscode(0);
          setTimeout(() => {
            setstatuscode(-1)
            const inputs = document.getElementsByClassName('Field')
            inputs[0].value = ""
            inputs[1].value = "";
            setpassword("");
            setEmail("")
          }, 1000);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const generateRandomNumber = () => {
      
    const sixDigitNumber = Math.floor(100000 + Math.random() * 900000);
    console.log(sixDigitNumber)
    setRandomNumber(sixDigitNumber);
    
  }

  const Navigate = ()=>{
    navigate("../resetpassword");
  }

  const sendMail = async () => {

    generateRandomNumber();

    const form = {
      to_name: 'bhautik',
      email: 'bhautiksinhvala333@gmail.com',
      code : randomNumber,
      
    }
    console.log(randomNumber)
    console.log({randomNumber})

    Object.keys(form).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        console.log(key)
        console.log(form[key])
        element.value = form[key];
      }
    });
    

    emailjs.sendForm('service_95pmtu6', 'template_me0ayk5', document.getElementById('fakeForm'), 'vQ-Q-raQ01oZeqYKP')
      .then((result) => {
        console.log("successs")
      }, (error) => {
        // show the user an error
      });
  }

  return (
    <div className={style.Back}>

      <div className={style.container}>
        <div className={style.header}>
          <div className={style.text}>Log In</div>
          <div className={style.underline}></div>
        </div>

        <div className={style.inputs}>

          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input className="Field" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
          </div>

          <div className={style.input}>
            <div className={style.icon}>
              <i className="fa-solid fa-lock"></i>
            </div>
            <input className="Field" type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder='Password' />
          </div>

        </div>

        <div className={style.forgetP}> Forgot Password <span onClick={Navigate}> Click here</span></div>

        {/* Fake Form for email sending purpose */}
          <form className={style.fakeForm} id='fakeForm' action="">

            <input type="text" id="to_name" name="to_name" />
            <input type="email" id="email" name="email" />
            <input type="text" name="code" id="code" />

          </form>

        <div className={style.submit} onClick={createPost}>Log In</div>
        {statuscode === 0 && <div className={style.einput}>Entered wrong password!</div>}
        {statuscode === 1 && <div className={style.sinput}> Successfully Login...</div>}
      </div>
    </div>

  )
}

export default Login