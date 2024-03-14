import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "./Greeting"
import Login from "./Login"
import Register from "./Register"
import Person from './components/Person'

function App() {

  return (
    <section>
      <div>
        <Person oruko="David"></Person>
        <Person oruko="Ademola"/>
        <Person oruko="Mark"/>
        <Login/>
        <Register/>
      </div>
    </section>
  )
}

export default App
