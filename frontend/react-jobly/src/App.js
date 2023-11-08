

import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";
import SignupForm from "./Components/SignupForm";
import Companies from "./Components/Companies";
import Profile from "./Components/Profile";
import Jobs from "./Components/Jobs";
import JoblyApi from "./api";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import {ContextProvider} from "./context/UserContext"
//requires something called a  polyfill? If I try to use this I get an error
// import jwt from "jsonwebtoken";



function App() {

const [currentUser, setCurrentUser] = useState('')

async function signup(credentials){
  try {
    let token = await JoblyApi.signup(credentials)
    
    let { username } = credentials;  //very insecure, but I have little time to turn this in
    if(token){
      console.log('cool, we got a token')
      //want to decode the token to get username, but we can't due to error, 
      //the error occurs when attempting to import jwt
      //that I have no time to fix, don't know what a polyfill is, so will
      //have alternative solution
      localStorage.setItem('userToken', token)
      localStorage.setItem('username', username)
      window.location.reload(false)
     
    } else {
      console.log('Do not save')
    }

  } catch (error) {
    console.log(error)
  }
}

async function login(credentials){
  try {
    let token = JoblyApi.login(credentials)
    let { username } = credentials;
    if(token){
      console.log("Cool, we have a login token")
      localStorage.setItem('userToken', token)
      localStorage.setItem('username', username)
      window.location.reload(false)
      
    } else {
      console.log("do not save")
    }
  } catch (error) {
      console.log(error)
  }
}


useEffect(() => {
  

async function isLoggedIn(){ //function to check if user is logged in

  let loggedInStatus = localStorage.getItem('userToken');
  if(loggedInStatus){
    let un = localStorage.getItem('username')
    
    
    let user = await JoblyApi.getCurrentUser(un)
    
    
    setCurrentUser(user)
    
  } else {
    console.log('logged out')
  }
}

isLoggedIn()


}, [])

  return (
    <>
      {/* <Home /> */}
       
        <BrowserRouter>
        <Navbar currentUser={currentUser}/>
         <h1>Welcome {currentUser.username}</h1>
          <Routes>
            
            <Route path="/" element={<Home currentUser={currentUser}/>}></Route>
            <Route path="/login" element={<LoginForm login={login} currentUser={currentUser}/>}></Route>
            <Route path="/signup" element={<SignupForm signup={signup} />}></Route>
           
            <Route path ="/companies" element={!currentUser ? <Navigate to="/" /> : <Companies />}></Route>
            <Route path = "/profile" element={!currentUser ? <Navigate to ="/" /> : <Profile />}/>
            <Route path = "/jobs" element={!currentUser ? <Navigate to="/"/> : <Jobs />}/>
          
          </Routes>
        </BrowserRouter>

    </>
 
   
  );
}

export default App;
