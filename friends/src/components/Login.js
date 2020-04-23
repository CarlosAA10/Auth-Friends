import React, { useState } from 'react'; 
import { render } from 'react-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth'; 

const LogIn = (props) => {
    const [userInfo, setUserInfo] = useState({
        credentials: {
            username: '', 
            password: ''
        }
    }); 

    const handleChanges = e => {
        setUserInfo({
            credentials: {
                ...userInfo.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }; 

    console.log('the user info',userInfo)

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
        .post('/api/login', userInfo.credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));

            // setUserInfo({
            //     credentials: {
            //         username:'', 
            //         password:'',
            //     }
            // })

            props.history.push('/protected'); 
        })
        .catch(err => {console.log(err)}); 
    }




    return(
        <div>
            <h1>Log In Page</h1>

            <form onSubmit={login}>
                <label htmlFor="username">
                    Username: 
                    <input 
                    id="username"
                    name="username"
                    type="text"
                    value={userInfo.credentials.username}
                    onChange={handleChanges}
                    /> 
                </label> 
                <label>
                    Password: 
                    <input 
                    id="password"
                    name="password"
                    type="password"
                    value={userInfo.credentials.password}
                    onChange={handleChanges}
                    />

                </label>

                <button>Log In</button>
            </form>
        </div>
    )
   
}; 

export default LogIn