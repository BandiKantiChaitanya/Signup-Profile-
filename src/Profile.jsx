import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Profile() {
  let location=useLocation()
  let navigate=useNavigate()
  const{fullName,email,password}=location.state||{}
  
  return (
    <div >
      <p className="heading">Profile</p>
      <div className="text">
      <p>Full Name:{fullName}</p>
      <p>Email:{email}</p>
      <p>Password:{password}</p>
      </div>
      <button onClick={()=>{navigate('/')}} >Logout</button>
    </div>
  )
}

export default Profile