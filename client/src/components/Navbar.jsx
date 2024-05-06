import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";


const Navbar = () => {

  const {isloggedIn} = useAuth();
  return (
    <>
    <header>
        <div className="container">
          <div className="logo-brand">
            Book
          </div>
        

        <nav>
          <ul>
            <li> <NavLink to="/"> Home </NavLink></li>
            <li> <NavLink to="/about"> About </NavLink></li>
            <li> <NavLink to="/contact"> contact </NavLink></li>        
            <li> <NavLink to="/service"> Service </NavLink></li>

            {isloggedIn?  //if token is there

            (<li> <NavLink to="/logout"> Logout </NavLink></li>) : 

            (<>
            <li> <NavLink to="/register"> Register </NavLink></li>
            <li> <NavLink to="/login"> Login </NavLink></li>
            </>)
            }
            
           

            {/* <li> <a href="/">Home</a></li>
            <li> <a href="/about">About</a></li>
            <li> <a href="/contact">Contact</a></li>
            <li> <a href="/service">Service</a></li>
            <li> <a href="/login">Login</a></li> */}
          </ul>
        </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar
