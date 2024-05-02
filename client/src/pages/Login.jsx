import { useState } from "react";

const Login = () => {

  const[ user, setUser] = useState({
    email:"",
    password:"",
  }
  );

  //handling the ip val
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name] : value,  //dynamic
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
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
              <button type="submit" className="btn btn-submit">Register Now</button>

            </form>
          </div>

        </div>
      </div>
    </main>
  </section>
  )
}

export default Login
