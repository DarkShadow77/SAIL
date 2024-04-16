import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
		console.log(email, password)
	}

	return (
		<>
			<div id="contact-form">
				<h3>Register Form</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-element">
						<label htmlFor="email" >Email:</label>
						<input type="email" value={email} placeholder='Enter Email' name='email' onChange={(e) => setEmail(e.target.value)} /> <br />
					</div>

					<div className="form-element">
						<label htmlFor="password">Password:</label>
						<input type="password" value={password} placeholder='Enter Password' name='password' onChange={(e) => setPassword(e.target.value)} /> <br />
					</div>

					<div className="form-element">
						<label htmlFor="username">Username:</label>
						<input type="text" value={username} placeholder='Enter Username' name='username' onChange={(e) => setUsername(e.target.value)} /> <br />
					</div>

					<button>Submit</button>
				</form>
			</div>
{/* 
			<p>Email: {email}</p>
			<p>Password: {password}</p>
			<p>Username: {username}</p> */}
		</>
	)
}

export default App
