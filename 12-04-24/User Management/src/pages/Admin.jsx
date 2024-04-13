import { useState } from "react";

const Admin = () => {
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        imgUrl: "",
    })

    const { username, email, imgUrl } = createUser;

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setCreateUser({
            ...createUser,
            [name]: name != "imgUrl" ? value : URL.createObjectURL(files[0])
        })

        console.log(createUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(createUser)
    }

    return (
        <>
            <h3>Admin</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="email" value={email}  onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="username" value={username} onChange={handleChange}/>
                    <input type="file" name="imgUrl"  onChange={handleChange}/>
                    {imgUrl != "" && <image src={imgUrl}/>}
                    <button type="submit">Create user</button>
                </form>
            </div>
        </>
    );
}

export default Admin;