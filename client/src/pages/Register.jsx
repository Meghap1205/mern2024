//import { application, response } from "express";
import { useState } from "react";

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  //handling the ip val
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;  //targetted name old
    let value = e.target.value;//old name

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();  //prevent from reload
    alert(user);
    console.log(user);

    // try {
    //   const response = await fetch(`http://localhost:5000/api/auth/register`, {
    //     method: "POST", //: nott = bcz object
    //     headers: {
    //       "Content-Type" : "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   }); 

    //   console.log(response);  //to connect with backend 4 thing => 1.url 2.post 3.content-type=application-json 4.json body
           
    // } catch (error) {
    //   console.log("register", error);
    // }

    //CORS = Cross-Origin Resource Sharing   = frontend and backend running on diff ports
    
  };

  return (

    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">

            <div className="registration-image">
              <img src="../images/registration.avif" alt="" width="500" height="500" />
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1><br />


              <form onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                    value={user.username} onChange={handleInput} />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                    value={user.email} onChange={handleInput} />
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                    value={user.phone} onChange={handleInput} />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"
                    value={user.password} onChange={handleInput} />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">Register Now</button>

              </form>
            </div>

          </div>
        </div>
      </main>
    </section>
  )
}

export default Register;
