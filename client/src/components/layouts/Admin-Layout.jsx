import { NavLink, Navigate, Outlet } from "react-router-dom";
import { RiUserFill } from "react-icons/ri";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {

  const {user} = useAuth();
  const {isloading} =useAuth;

  

  while(isloading){
    <h1> loading ... </h1>;
  }

  
  if(!user.isAdmin){
    return <Navigate to="/"/>;
  }


  return (
    <>
    <header>
      <div className="container">
        <nav>
          <ul>
            <li> <NavLink to="/admin/users"> <RiUserFill />users</NavLink> </li>
            <li><NavLink to="/admin/contacts">contacts</NavLink></li>
            <li><NavLink to= "/service">services</NavLink></li>
            <li><NavLink to = "/">home</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <Outlet />
    </>
  )
}

export default AdminLayout;
