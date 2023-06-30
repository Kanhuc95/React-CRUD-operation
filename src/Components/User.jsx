import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import { Link } from 'react-router-dom'

const User = () => {
  let [content,setContent]= useState([])
 
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
      console.log("Data has been fetched");
      setContent(response.data)
      console.log(response.data)
    })
    .catch(()=>{
      console.log("something went wrong");
    })
  },[])

  let deleteuser=(y)=>{
    axios.delete(`http://localhost:3000/users/${y}`)
    .then(()=>{
      window.location.assign('/user')
    })
  }
  return (
    <div id={style.homePage}>
      {content.map((x)=>{
        return(
          <div id={style.cards} key={x.id}>
            <table>
              <tr>
                <th colSpan="2"><h5>User {x.id}</h5></th>
              </tr>
              <tr>
              <td>Name</td>
              <td>:{x.name}</td>
              </tr>
              <tr>
              <td>Salary</td>
                <td>:{x.salary}</td>
              </tr>
                <tr>
                <td>Company</td>
                <td>:{x.cname}</td>
              </tr>
              <tr>
              <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
              <td><button onClick={()=>{deleteuser(x.id)}} >DELETE</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default User