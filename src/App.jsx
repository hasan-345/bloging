import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Signup from './components/Signup'
import Header from './components/Header'
import authServ from "./appwrite/auth"
import { useDispatch } from 'react-redux'
import { login,logout } from './store/authSlice'
import Footer from './components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate();
 const dispatch = useDispatch()
 const [loading,setLoading] = useState(true)
 useEffect(()=>{
   authServ.getCurrentAccount().then((response)=> { 
    if(response){
      dispatch(login(response))
     navigate("/home")
    }else{
      dispatch(logout());
    }
    } ).finally(()=>{
      setLoading(false)
    })
 },[])
  return !loading?  (
<>  
<Header/>
   <Outlet/>
    <Footer/>
    </>
  ): null
}

export default App
