import React from 'react'
import logo from '../images/logo.png'
import { useSelector } from 'react-redux'
function Footer() {
   
  const authStatus = useSelector((state)=> state.status)

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

  return (
    <div className='footer'>
         <div className="container">
            <div className="inner-footer">
                <div className="logot">
                  <img src={logo} className='logo' alt="" />
                </div>
                <div className="lists">
                  <h2>Categories</h2>
                  <div className="in-list">
                    {navItems.map((item)=> item.active? (
                      <li key={item.name} > {item.name} </li>
                    ):null )}
                  </div>
                </div>
                <div className="lists">
                  <h2>Address</h2>
                  <div className="in-list-2">
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg> ahtishamhassan345@gmail.com</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg> Toba Tek Singh, Punjab, Pakistan</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg> +92 300 6566584</li>
                  </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer