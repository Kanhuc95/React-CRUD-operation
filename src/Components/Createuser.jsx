import React, { useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createuser = () => {

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [cname,setCname]=useState("")
    let nav=useNavigate();

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCname(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,cname}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
          console.log("Data has been saved");
          nav('/user')
        })
        .catch(()=>{
          console.log("something went wrong");
        })
    }
  return (
    <div id={style.myForm}>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" value={name} onChange={nameData}/><br />
        <label htmlFor="">Salary:</label>
        <input type="number" value={salary} onChange={salaryData}/><br />
        <label htmlFor="">Company:</label>
        <input type="text" value={cname} onChange={companyData}/> <br />
        <button onClick={formHandle}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Createuser
