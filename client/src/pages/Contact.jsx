import { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [userdata, serUserdata] = useState(true); //is logged in then automatecally stored username and email from stored dtaa from context api


  const { user } = useAuth();  //all globally stored userdata

  if (userdata && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    serUserdata(false)
  }
  const handleInput = (e) => {  //e=event object
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("message sent successfully");

    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: "POST", //: nott = bcz object
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("contact", response);

      if (response.ok) {

        setContact({
          username: "",
          email: "",
          message: ""
        });
        alert("message sent successfully");


      }


    } catch (error) {
      console.log(error);
    }

  }

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">

            <div className="registration-image">
              <img src="../images/login.png" alt="" width="500" height="400" />
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">contact Form</h1><br />


              <form onSubmit={handleSubmit}>

                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                    value={contact.username} onChange={handleInput} />
                </div>


                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                    value={contact.email} onChange={handleInput} />
                </div>

                <div>
                  <label htmlFor="message">message</label>
                  <textarea name="message" id="message" cols="30" rows="10" value={contact.message} onChange={handleInput}></textarea>
                </div>

                <br />
                <button type="submit" className="btn btn-submit">submit</button>

              </form>
            </div>

          </div>
        </div>
      </main>
    </section>
  )
}

export default Contact
