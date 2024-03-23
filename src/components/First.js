import React from 'react'
import { Link } from 'react-router-dom'
import('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap')
function First() {
  return (

    <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "#cae8d2" }}>

      <div style={{
        backgroundColor: "white",
        height: "350px",
        width: "35%",
        margin: "25vh auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center inner elements horizontally

      }}>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#4CAF50">
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H5V6h14v12zM12 8H8v2h4V8zm0 4H8v2h4v-2z" />
            </g>
          </svg>
        </div>

        <div style={{ marginTop: "10px", display: "inline-block" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="60" viewBox="0 0 250 60">
            <text x="10" y="40" font-family="Shrikhand, cursive" font-size="40" fill="#6ded8f" letter-spacing="2">
              Daily-Diary
            </text>
          </svg>
        </div>

        <div style={{ fontWeight: "bolder", fontFamily: "Shrikhand, cursive", fontSize: '20px', marginTop: 'px' }}>
          <h1>
            Save Your Day @ one Place!
          </h1>
        </div>

        <div style={{width:'40%', margin: "30px 0" ,display:'flex',justifyContent:'space-evenly'}}>
          <Link to="login">
            <button style={{fontWeight:'700', backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log in</button>
          </Link>


          <Link to="register">
            <button style={{ fontWeight:'700',backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Sign Up</button>
          </Link>

        </div>



      </div>
    </div>


  )
}

export default First