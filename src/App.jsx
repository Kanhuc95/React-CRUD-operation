import React, { Fragment } from 'react'
import HomeCrud from './Components/HomeCrud'
import Createuser from './Components/Createuser'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import User from './Components/User'
import EditUser from './Components/EditUser'
import Login from './Components/Login'


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Login/>
        <Routes>
         <Route element={<HomeCrud/>} path='/h'/>
         <Route  element={<Createuser/>} path='/cu'/>
         <Route  element={<User/>} path='/user'/> 
         <Route element={<EditUser/>} path='/edit/:index'/> 
        </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App
