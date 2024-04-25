import React, { useState } from 'react'
import axios from 'axios'
import style from "./signup.module.css"


const SignUp = () => {
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
    });

    const handleChange =  e => {
        const {name, value} = e.target 
        setSignUp(prev => ({
            ...prev, [name]: value
        }))
    }

    let url = "http://localhost:8080/api/signup"

  
    const formSubmit = async ()=> {
     try {
        // let formToSubmit = new FormData()

        // for(let key in signUp){
        //     formToSubmit.append(key, signUp[key])
        // }

        // const res = await axios.post("http://localhost:8080/api/signup", signUp )
        // console.log(res.data);
        const res = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            body: JSON.stringify(signUp), 
            headers : {
                "Content-type" : "application/json",
                
            },
            mode: "no-cors"
            
        })
        if(res.ok){
            console.log(res.json())
        }
     } catch (error) {
        console.log("Error submitting")
     }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
       formSubmit()
       console.log(signUp);
       
    }

  return (
   <>
    <div id={style.wrapper}>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='firstname' name='firstName' onChange={handleChange}/>
            <input type='text' placeholder='lastname'  name='lastName' onChange={handleChange}/>
            <input type='email' placeholder='email'  name='email' onChange={handleChange}/>
            <input type='password' placeholder='password'  name='password' onChange={handleChange}/>
            <input type='text' placeholder='age'  name='age' onChange={handleChange}/>
            <button type='submit'> SignUp</button>

        </form>
    </div>
   </>
  )
}

export default SignUp