import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import style from './CSS/Login.module.css'

    const Login = ({ defineUser }) => {

      const [username, setusername] = useState("");
      const [password, setpassword] = useState("");
      const [statuscode, setstatuscode] = useState(0);
      const navigate = useNavigate();


      useEffect(() => {
        setTimeout(() => {
          setstatuscode(0);
        }, 2000);
      }, [statuscode])


      const createPost = () => {
        axios.post("http://localhost:8000/user/login", { username, password })
          .then((response) => {

            if (response.data.verification) {
              defineUser(username);
              setstatuscode(1);
              console.log("verified");
              setTimeout(() => {
                navigate("../menubar");
              }, 1000);

            } else {
              defineUser(username);
              console.log("not verified");
              setstatuscode(2);
              setpassword("");
              setusername("");
            }
          })
          .catch(function (error) {
            console.log(error);
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
          <input type="email" placeholder='Email' />
        </div>
        <div className={style.input}>
          <div className={style.icon}>
            <i className="fa-solid fa-lock"></i>
          </div>
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <div className={style.forgetP}> Forgot Password <span> Click here</span></div>
      <div className={style.submit}>Log In</div>
    </div>
  </div>

  )
}

export default Login