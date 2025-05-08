import React from 'react'
import Header from './Header'
import { Route,Routes } from 'react-router-dom'
import Signup from './Signup'
import Profile from './Profile'

function App() {
  return (
    <div>
      
      <Header/>
      <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      
    </div>
  )
}

export default App