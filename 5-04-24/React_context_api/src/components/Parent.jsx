import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import AppContext, { useContextHook } from '../AppContext'

const Grandparent = () => {
  // const {user, setUser}= useContextHook()
  // console.log(user);
    // const greeting = "Good afternoon"
  return (
    
    <div>
      <h1>Hello from Parent</h1>
      <ChildOne/>
      <ChildTwo/>
    </div>
   
  )
}

export default Grandparent


