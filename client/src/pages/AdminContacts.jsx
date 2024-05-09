import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();

 
  const [contactData, setcontactData] = useState([]);

  const getContactDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();


      if (response.ok) {
        setcontactData(data);
        toast.success("deleted successfully");
      }
      else{
        toast.error("not deleted ");
      }

    } catch (error) {
      console.log(error);
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if(response.ok){
        getContactDetails();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContactDetails();
  }, []);

  return (
    <>
      <h1>contacts</h1>

      <div className="container">
        {contactData.map((curele, index) => {

          const { username, email, message , _id} = curele;

          return (<div key={index} >
            <p>{username}</p>
            <p>{email}</p>
            <p>{message}</p>
            <button className="btn" onClick={()=>deleteContact(_id)}>delete</button>
          </div>);
        })}
      </div>

    </>
  )
}

export default AdminContacts
