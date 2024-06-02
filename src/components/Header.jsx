import React, { useState } from 'react'
import logo from '../images/logo.png'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
function Header() {
    const authStatus = useSelector((state) => state.status)
    const navItems = [
        {
            name: "Home",
            slug: "/home",
            active: authStatus
        },
        {
            name: "Home",
            slug: "/",
            active: !authStatus
        },{
            name: "Login",
            slug: "/login",
            active: !authStatus
        }
        ,{
            name: "Sign Up",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts", 
            slug: "/all-posts",
            active: authStatus
        },{
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        },{
            name: "Inactive Posts",
            slug: "/inactive-posts",
            active: authStatus
        },
    ]
    const [open,setOpen] = useState(false)
  return (
    <div className="parent-header">
    <div className={`header ${open?"header2":""}` }>
        <div className="container">
              <div className="navbar">
                <div className="logo"> <img className='logo' src={logo} alt="" /> </div>
                
                
                    <ul className={`nav ${open?"active-nav":""}`}>
                       {navItems.map((items)=> items.active? (
                        <li key={items.name} onClick={()=> setOpen((prev)=> !prev)} > <NavLink to={items.slug} className={({isActive})=> `anchor ${isActive?"anchor2":""}` }> {items.name} <div className="line"></div></NavLink> </li>
                       ) : null
                      
                    )}
                    {   
                    authStatus && <LogoutBtn/>
                    }
                      
                    </ul>
                    <div class={`menu ${open? "active-btn": ""} `} onClick={()=> setOpen((prev)=> !prev) } > 
                        <div class="lines"></div>
                        <div class="lines"></div>
                        <div class="lines"></div>
                    </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Header