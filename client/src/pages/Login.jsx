import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const[ user, setUser] = useState({
    email:"",
    password:"",
  }
  );

  const navigate = useNavigate()

  //handling the ip val
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name] : value,  //dynamic
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: "POST", //: nott = bcz object
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(user),
      }); 
      console.log("login", response);

      if(response.ok){
        setUser({email: "" , password: ""});
        navigate("/");
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
            <h1 className="main-heading mb-3">Login Form</h1><br />


            <form onSubmit={handleSubmit}>
              
              <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" placeholder="email" id="email" required autoComplete="off" 
                value={user.email} onChange={handleInput}/>
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"
                value={user.password} onChange={handleInput} />
              </div>

              <br />
              <button type="submit" className="btn btn-submit">Login Now</button>

            </form>
          </div>

        </div>
      </div>
    </main>
  </section>
  )
}

export default Login
