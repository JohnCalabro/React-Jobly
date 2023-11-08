import { Link, NavLink } from "react-router-dom"
import "../App.css";

const Navbar = ({currentUser}) => {
    console.log(currentUser)

    const handleLogout = (e) => {
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <div className="navbar">
            <NavLink to="/">Jobly</NavLink>
            {!currentUser ? <NavLink to="/login">Login</NavLink> : 
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>}
            {!currentUser ? <NavLink to="/signup">Sign Up</NavLink> : <p></p>}
            {currentUser ? <NavLink to="/companies">Companies</NavLink> : <p></p>}
            {currentUser ? <NavLink to="/jobs">Jobs</NavLink> : <p></p>}
        </div>
    )
}

export default Navbar;
