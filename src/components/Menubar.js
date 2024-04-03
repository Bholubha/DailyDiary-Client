import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CSS/Menubar.module.css'
import InsertDay from './InsertDay'
// import('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap')
const Menubar = () => {

  const [selected, setSelected] = useState("1");
  const [prevSelected, setPrevSelected] = useState("1")

  const selectItem = (e) => {
    const id = e.target.id;
    setSelected(id)
    setPrevSelected(id)
  }

  const handleMouseOver = () => {
    setPrevSelected(selected)
    setSelected(0)
    // console.log(selected)
    // console.log(prevSelected)
  };

  const handleMouseOut = () => {
    setSelected(prevSelected)
  };

  return (
    <div className={style.Root}>
      <div className={style.header}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="100" height="60" fill="#4CAF50">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H5V6h14v12zM12 8H8v2h4V8zm0 4H8v2h4v-2z" />
              </g>
            </svg>
          </div>
          <div className={style.menu}>

            {selected === "1" ? <div className={style.box1}>
              <h1 id="1" onClick={selectItem}  >Diary</h1>
              <div className={style.tapezoid}></div>
            </div> :
              <div className={style.box}>
                <h1 id="1" onClick={selectItem}
                   >Diary</h1>
                <div className={style.tapezoid}></div>
              </div>
            }

            {selected === "2" ? <div className={style.box1}>
              <h1 onClick={selectItem} id="2">Insert Diary</h1>
              <div className={style.tapezoid}></div>
            </div> :
              <div className={style.box}>
                <h1 onClick={selectItem} id="2"
                >Insert Diary</h1>
                <div className={style.tapezoid}></div>
              </div>}

            {selected === "3" ? <div className={style.box1}>
              <h1 id="3" onClick={selectItem}>Update Diary</h1>
              <div className={style.tapezoid}></div>
            </div> :
              <div className={style.box}>
                <h1 id="3" onClick={selectItem} 
                 >Update Diary</h1>
                <div className={style.tapezoid}></div>
              </div>}

            {selected === "4" ? <div className={style.box1}>
              <h1 id="4" onClick={selectItem}>Contact</h1>
              <div className={style.tapezoid}></div>
            </div> :
              <div className={style.box}>
                <h1 id="4" onClick={selectItem} 
                 >Contact</h1>
                <div className={style.tapezoid}></div>
              </div>}


          </div>
        </div>
        <div className={style.container}></div>
      </div>
      <div className={style.main}>
            {selected==="1" && <InsertDay />}
      </div>
    </div>
  )
}

export default Menubar