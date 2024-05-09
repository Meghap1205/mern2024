import {BrowserRouter, Routes, Route} from "react-router-dom"; //for routing
import {Home} from "./pages/Home";
import About from "./pages/About";    //jyare default export hoy tyare {} nahi to aen j
import Service from "./pages/Service";  //default export ma {} ni ave
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import "./App.css";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate";


const App = () => {    //rafce shortcut
  return (
    <BrowserRouter>
       <Navbar/>
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/service" element = {<Service />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} /> 

        <Route path="/admin" element= {<AdminLayout />} >
          <Route path="users" element= {<AdminUsers/>} />
          <Route path="contacts" element= {<AdminContacts/>} />
          <Route path="users/:id/edit" element= {<AdminUpdate/>} />
          <Route>
          </Route>
        </Route>
 


    </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
