import React from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigator=useNavigate()
  let [errmsg,setErrmsg]=useState()
  let [uname,setUname]=useState()
  let [pass,setPass]=useState()

    let login=()=>{
        axios.get(`http://localhost:3000/user`)
        .then((x)=>{
          if(x.data[0].usr===uname){
            if(x.data[0].pss===pass){
              navigator('/h')
            }else{setErrmsg("wrong password")}
          }else{setErrmsg("Wrong user id")}
        })
      }

  return (
    
   <section id={style.main}>
     <div className={style.mylogin}>
      <p>{errmsg}</p>
      <label htmlFor="">Username</label>
      <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
      <br /><br />
      <label htmlFor="">Password</label>
      <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br /><br />
      <button type='submit' onClick={login}>Login</button>
    </div>
   </section>
    
  )
}

export default Login
