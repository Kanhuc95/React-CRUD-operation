import React, { useEffect } from 'react'
import style from "./home.module.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const EditUser = () => {
  
    let [name,setName]=useState()
    let [salary,setSalary]=useState()
    let [cname,setCname]=useState()

    let {index}=useParams()
    let nav=useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${index}`)
      .then((r)=>{
        setName(r.data.name);
        setSalary(r.data.salary);
        setCname(r.data.cname);
      })
    },[])
   const update=()=>{
    let payload={name,salary,cname}
    axios.put(`http://localhost:3000/users/${index}`,payload);
    nav('/user')
   }

  return (
    <div id={style.myForm}>

      <form action="">
        <h1>UPDATE USER</h1>
        <label htmlFor="">Name:</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br />
        <label htmlFor="">Company:</label>
        <input type="text" value={cname} onChange={(e)=>{setCname(e.target.value)}}/> <br />
        <button onClick={update}>SUBMIT</button>
      </form>
    </div>
  )
}

export default EditUser
