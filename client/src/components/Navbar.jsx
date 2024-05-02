import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
            <li> <NavLink to="/register"> Register </NavLink></li>
           

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
