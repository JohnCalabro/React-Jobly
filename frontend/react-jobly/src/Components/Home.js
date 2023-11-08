import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter} from "react-router-dom";
import "../App.css";

const Home = ({currentUser}) => {
    return (
        <>
       
            <div className="container">
                 <h1 className="site-title">Jobly</h1>
                 <p className="site-desc">All the jobs in one, convenient place</p>
                 {!currentUser ? <Link to={"/login"}><button className="logsign">Log in</button></Link>
                 : <p></p>
                }
                 
                 {!currentUser ? <Link to={"/signup"}><button className="logsign">Sign up</button></Link>
                 : <p></p>
                }
             
                 
            </div>
            
        </>
    )
}

export default Home;