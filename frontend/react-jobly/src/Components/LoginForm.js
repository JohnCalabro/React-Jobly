import { useState } from "react";
import "../App.css";

const LoginForm = ({login, currentUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e){
        setUsername(e.target.value)
        console.log(username)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
        console.log(password)
    }

    const loginCredentials = {
        username,
        password
    }

    async function handleLoginSubmit(e){
        e.preventDefault()
        let result = await login(loginCredentials);
        // return result;
        console.log(result)
    }

    return (
        <>
        
        { !currentUser ?
        <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input 
            id="username"
            value={username}
            onChange={handleUsernameChange}
            />

            <label htmlFor="password">Password</label>
            <input 
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />

            <button>Login</button>
        </form>
        : <p></p>
}       
        </>
    )
}

export default LoginForm;