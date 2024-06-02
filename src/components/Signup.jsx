import React, { useState } from 'react'
import authServ from '../appwrite/auth'
import {Button,Input} from './index.js'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {login} from '../store/authSlice.js'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import services from '../appwrite/config.js'
function Signup() {
   const dispatch = useDispatch()
   const {register,handleSubmit} = useForm()
   const [error,setError] = useState();
   const navigate = useNavigate()
   const [loading,setLoading] = useState("Sign Up")

   const getData = async(data)=>{
    setError("")
    setLoading(<i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i>)
    try {
        const userData = await authServ.createAccount({...data})
      if(userData){
        console.log(userData)
        const userData2 = await authServ.getCurrentAccount()
        dispatch(login(userData2))
        navigate("/home")
      }
      setLoading("Sign Up")

    } catch (error) {
        setError(error.message)
        setLoading("Sign Up")
    }
      
   }
  const [lock,setLock] = useState(false)

  return (
    <div className='bgtag'>
       <div className='container'>
        <div className="form">
            <div className="inner-form">
            <h1>Sign Up</h1>
    <form onSubmit={handleSubmit(getData)} >
           <div className='out-input'> <Input type="text" {...register("name",{required: true})} placeholder = "Enter your name" className="input"/> <i className='bx icon bxs-user'></i> </div>
           <div className='out-input'> <Input type="text" placeholder = "Enter your email" className="input" {...register("email",{required: true})} /><i className='bx  icon bxs-envelope'></i></div>
           <div className='out-input'> <Input type={`${!lock?'password':'text'}`} placeholder = "Enter your password" {...register("password",{required: true})} className="input"/><i className={`bx   ${!lock?"bxs-lock-alt  icon ":"bxs-lock-open-alt  icon "}`} onClick={()=>setLock((pev)=> !pev) } ></i></div>
              
              <div className='out-btn'> <Button type='submit' className='btn'> {loading} </Button></div>
    </form>
              <p>Already have an account <Link to="/login" style={{color: "white"}} > Login </Link>  </p>
               <div className="error" style={{textAlign:"centre", color:"white"}}> {error} </div>
               </div>
               </div>
               </div>
    </div>
  )
}

export default Signup