import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    let [err,setErr]=useState('')
    let [isSuccess,setIsSuccess]=useState(false)
    let [fullName,setFullName]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [confirmPassword,setConfirmPassword]=useState('')

    let navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        if(fullName===''||email===''||password===''||confirmPassword===''){
            setErr('Error: All fields are mandatory')
            setIsSuccess(false)
        }else if(password!==confirmPassword){
            setErr('Both Passwords are not matching')
            setIsSuccess(false)
        }else{
            setErr('Sucessfully Signed UP!')
            setIsSuccess(true)
            setTimeout(()=>{
                navigate('/profile',{
                    state:{
                        fullName,
                        email,
                        password
                    }
                })
            },3000)
        }
        
        
    }
  return (
    <div className='signup' >
        <p className='heading' >Signup</p>
        <form onSubmit={handleSubmit} >
            <input type="text"  placeholder='Full Name' value={fullName} onChange={(e)=>{setFullName(e.target.value)}} />
            <hr />
            <input type="email"  placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
            <hr />
            <input type="password"  placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <hr />
            <input type="password"  placeholder='Confirm Password'  value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
            <hr />
            <p style={{ color: isSuccess ? 'green' : 'red' }}>{err}</p>
            <button>Signup</button>
        </form>
        
    </div>
  )
}

export default Signup