import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "./Greeting"
import Login from "./Login"
import Register from "./Register"

function App() {

  return (
    <section>
      <div>
        <Login/>
        <Register/>
      </div>
    </section>
  )
}

export default App
