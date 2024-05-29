  import React, { useEffect, useState } from 'react'
  import style from './CSS/Register.module.css'
  // import '@fortawesome/fontawesome-free/css/all.css';
  import * as EmailValidator from 'email-validator';
  import { useNavigate } from "react-router-dom";
  import axios from 'axios';
  import emailjs, { sendForm } from '@emailjs/browser';


  function ResetPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState('')
    const [password, setPassword] = useState();
    const [pwStatus, setPwStatus] = useState(-1)
    const [showVerification, setShowVerification] = useState(-1);
    const [signStatus, setSignStatus] = useState(0);
    const [randomNumber, setRandomNumber] = useState(null);
    const [showPw, setShowPw] = useState(0);
    const [codeStatus, setCodeStatus] = useState(0);
    const [toName,setToName] = useState("")

    // validation of email 

    useEffect(() => {
      if (email.length > 0) {
        if (EmailValidator.validate(email)) {
          setEmailStatus('valid');
        } else {
          setEmailStatus('invalid');
        }
      }
    }, [email])






    const Reset = async () => {
      console.log("in reset")

      const response = await axios.post("https://daily-diary-backend.up.railway.app/user/senduser", { email });
      console.log(response.data)

      if(response.data.valid){
        // set username (we have to send mail to him/her)
        setToName(response.data.username);
        setShowVerification(1);
        setShowPw(1);

      }else{
        setCodeStatus(4)
        const inputs = document.getElementsByClassName('Field')
        inputs[0].value = ""
        setTimeout(() => {
        setCodeStatus(0)  
        }, 1000)
        return;
      }
      
      var sixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      setRandomNumber(sixDigitNumber)

    }

    useEffect(() => {
      console.log(randomNumber)
      console.log(toName)
      if (randomNumber != null) Sendmail();
    }, [randomNumber]);

    const Sendmail = async () => {
      console.log("in sendmail")
      const form = {
        to_name: toName,
        email: email,
        code: randomNumber,

      }

      Object.keys(form).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
          element.value = form[key];
        }
      });

      emailjs.sendForm('service_95pmtu6', 'template_me0ayk5', document.getElementById('fakeForm'), 'vQ-Q-raQ01oZeqYKP')
        .then((result) => {
          console.log("successs")
        }, (error) => {
          // show the user an error
          console.log("ERRORR")
        });
    }

    const Verify = async () => {

      setShowVerification(0);
      setPassword("")
      
      const inputs = document.getElementsByClassName('Field')
   
      inputs[1].value = ""

      if (parseInt(password) === randomNumber) {
        setShowPw(2);
        setCodeStatus(2);
        
       

        setTimeout(() => {
          setCodeStatus(0)

        }, 1000)
      } else {
        inputs[0].value = ""
        setEmail("")
        setCodeStatus(1);
        setShowPw(0)
        setTimeout(() => {
          setCodeStatus(0)
        }, 1000)
      }
    }

    const Set = async () => {

      const res = await axios.post("https://daily-diary-backend.up.railway.app/user/deleteuser", { email });

      console.log("here not")
        axios.post("https://daily-diary-backend.up.railway.app/user/register", { username : toName ,email, password })
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


            setEmail("")
            setPassword("")
            const inputs = document.getElementsByClassName('Field');
            inputs[0].value = ""
            inputs[1].value = ""
            inputs[2].value = ""
          }, 1000);
        });
    
     

      setTimeout(()=>{
        navigate('../')
      },1000)
    }




    return (
      <div className={style.Back}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.text}>{showVerification === 1 ? <p>Reset Password</p> : <p>Reset Password</p>}</div>
            <div className={style.underline}></div>
          </div>

          <div className={style.verify}>Verify your email</div>

          <div className={style.inputs}>
            <div className={style.Email}>
              <div className={style.input}>
                <div className={style.icon}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <input className="Field" type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              {emailStatus === 'invalid' && <div className={style.einput}>Entered email is not valid !!</div>}
              {/* {emailStatus==='valid' && <div className={style.sinput}>Entered email is valid!</div>} */}
            </div>

            {showVerification === 1 && <div className={style.verify1}>Open email and enter code to verify your email</div>}

            {showPw !== 0 && <div className={style.Password}>
              <div className={style.input}>
                <div className={style.icon}>
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input className="Field" type="password" placeholder={showPw === 1 ? "verify email" : "set password"} onFocus={() => pwStatus === -1 && setPwStatus(0)} onChange={(e) => { setPassword(e.target.value) }} />
              </div>


            </div>}

            {codeStatus === 1 && <div className={style.einput}>Entered wrong verification code!</div>}
            {codeStatus === 2 && <div className={style.sinput}>email verified Successfully!</div>}
            {codeStatus === 3 && <div className={style.sinput}>password updated Successfully!</div>}
            {codeStatus === 4 && <div className={style.einput}>Please Enter Valid email</div>}

          </div>

          {/* Fake Form for email sending purpose */}

          <form className={style.fakeForm} id='fakeForm' action="">

            <input type="text" id="to_name" name="to_name" />
            <input type="email" id="email" name="email" />
            <input type="text" name="code" id="code" />

          </form>

          <div className={style.submit} onClick={showPw === 0 ? Reset : showPw === 1 ? Verify : Set}>{showPw === 0 ? <p>Reset Password</p> : showPw === 1 ? <p>Verify email</p> : <p>Set Password</p>}</div>
          {signStatus === -1 && <div className={style.einput}>Email already exist </div>}
          {signStatus === 1 && <div className={style.sinput}>Successfully sign up...</div>}
        </div>
      </div>
    )
  }

  export default ResetPassword