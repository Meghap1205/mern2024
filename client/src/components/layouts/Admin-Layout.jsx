import { NavLink, Outlet } from "react-router-dom";
import { RiUserFill } from "react-icons/ri";

const AdminLayout = () => {
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
