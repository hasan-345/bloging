import React from 'react'
import { Button } from '..'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bgtag2">
        <div className="container">
            <div className="home">
                <h1>Let's get started</h1>
                <div className='out-btn'> <Link to="/signup"> <Button type='submit' className='btn btn-2'>Sign Up</Button></Link> <Link to="/login"> <Button type='submit' className='btn btn-2'>Login</Button></Link></div>
                </div>
        </div>
    </div>
  )
}

export default Home