import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {Button,Input} from "./index.js"
import authServ from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import {login as authLogin} from "../store/authSlice.js"
import { Link } from 'react-router-dom';
function Login() {
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState()
    const navigate = useNavigate()
    const [loading,setLoading] = useState("Login")
    const login = async(data)=>{
        setError("")
        setLoading(<i class='bx bx-loader-circle bx-spin bx-rotate-90 icon' ></i>)
        try {
        const userData = await authServ.login({...data})
            if(userData){
                const userData2 = await authServ.getCurrentAccount()
                if(userData2){
                    dispatch(authLogin(userData2))
                    navigate("/home")
                    setLoading("Login")
                }
                
            }else{
                setError("No login Invalid credentials. Please check the email and password")
                setLoading("Login")
            }
            
        } catch (error) {
            setError(error.message);
            setLoading("Login")
        }
        
    } 
    const [lock,setLock] = useState(false)
  return (
    <div className='bgtag'>
    <div className='container'>
     <div className="form">
         <div className="inner-form">
         <h1>Login</h1>
 <form onSubmit={handleSubmit(login)} >
 <div className='out-input'> <Input type="text" placeholder = "Enter your email" className="input" {...register("email",{required: true})} /><i className='bx bxs-envelope  icon '></i></div>
           <div className='out-input'> <Input type={`${!lock?'password':'text'}`} placeholder = "Enter your password" {...register("password",{required: true})} className="input"/><i className={`bx   ${!lock?"bxs-lock-alt  icon ":"bxs-lock-open-alt  icon "}`} onClick={()=>setLock((pev)=> !pev) } ></i></div>
           
           <div className='out-btn'> <Button type='submit' className='btn'> {loading} </Button></div>
 </form>
           <p>Don't have an account <Link to="/signup" style={{color: "white"}}> Sign Up </Link> </p>
               <div className="error" style={{textAlign:"centre", color:"white"}}> {error} </div>
            </div>
            </div>
            </div>
 </div>
  )
}

export default Login