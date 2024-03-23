import { useState } from 'react'
import './App.css'

function App() {

  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "other",
  })

  function onFormChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({
      ...userDetails,
      [name]: value
    })

  }

  function handleSubmit(e){
		e.preventDefault()
		console.log(userDetails.firstname, userDetails.lastname, userDetails.email,userDetails.password, userDetails.gender,)
	}

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="form-element">
          <label htmlFor="firstname" >Firstname:</label>
          <input type="text" value={userDetails.firstname} placeholder='Enter Firstname' name='firstname' onChange={(e) => onFormChange(e)} /> <br />
        </div>

        <div className="form-element">
          <label htmlFor="lastname" >Lastname:</label>
          <input type="text" value={userDetails.lastname} placeholder='Enter Lastname' name='lastname' onChange={(e) => onFormChange(e)}/> <br />
        </div>

        <div className="form-element">
          <label htmlFor="email" >Email:</label>
          <input type="email" value={userDetails.email} placeholder='Enter Email' name='email' onChange={(e) => onFormChange(e)}/> <br />
        </div>

        <div className="form-element">
          <label htmlFor="password">Password:</label>
          <input type="password" value={userDetails.password} placeholder='Enter Password' name='password' onChange={(e) => onFormChange(e)}/> <br />
        </div>

        <div className="form-element">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" value={userDetails.gender} onChange={(e) => onFormChange(e)}>
            <option value="others">Others</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}

export default App
