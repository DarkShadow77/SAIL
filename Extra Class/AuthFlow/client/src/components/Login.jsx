import React, { useEffect, useState } from 'react'
import style from "./login.module.css"
import axios from 'axios';

const Login = () => {
    const [SignIn, setSignIn] = useState({
        email: "",
        password: "",
    });

    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

     return (
        <div id={style.wrapper}> 
            <form action="" onSubmit={handleSubmit}>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <button>SignIn</button>
            </form>
        </div>
    )
}

export default Login