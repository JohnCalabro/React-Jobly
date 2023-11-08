import "../App.css";
import { useState } from "react";

const SignupForm = ({signup}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function handleUnChange(e){
        setUsername(e.target.value)
        console.log(username)
    }

    function handlePwChange(e){
        setPassword(e.target.value)
        console.log(password)
    }

    function handleFnChange(e){
        setFirstName(e.target.value)
        console.log(firstName)
    }

    function handleLnChange(e){
        setLastName(e.target.value)
        console.log(lastName)
    }

    function handeEmChange(e){
        setEmail(e.target.value)
        console.log(email)
    }


    const credentials = {
        username,
        password,
        firstName,
        lastName,
        email
    }

    async function handleSubmit(e){
        e.preventDefault()
        let result = await signup(credentials);
        // return result;
        console.log(result)
    }

    // testSignup()
    return (
        <>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            id="username"
            value={username}
            onChange={handleUnChange}
            />
            <label htmlFor="password">Password</label>
            <input 
            id="password"
            value={password}
            onChange={handlePwChange}
            />
            <label htmlFor="first_name">First Name</label>
            <input 
            id="first_name"
            value={firstName}
            onChange={handleFnChange}
            />
            <label htmlFor="last_name">Last Name</label>
            <input 
            id="last_name"
            value={lastName}
            onChange={handleLnChange}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            value={email}
            onChange={handeEmChange}
            />
            <button>Sign Up</button>
        </form>
        </>
    )
}

export default SignupForm;