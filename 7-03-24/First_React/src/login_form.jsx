function Login_Form() {
    return (
        <div>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default Login_Form