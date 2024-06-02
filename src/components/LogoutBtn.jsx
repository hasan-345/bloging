import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {logout} from '../store/authSlice'
import authServ from '../appwrite/auth'
function LogoutBtn() {
   const navigate= useNavigate();
   const dispatch = useDispatch();
   const logOut = async ()=>{
    await authServ.logOut().then(()=>{
        dispatch(logout())
        navigate("/")
    })
   }

  return (
 <li onClick={logOut} >LogOut <div className="line"></div> </li>
  )
}

export default LogoutBtn