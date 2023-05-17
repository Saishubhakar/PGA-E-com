import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const status = response.status

    if(status === 200){
      window.alert("Logged in successfully")
      window.location.href = "http://localhost:3000/"
    }
    else{
      window.alert("Invalid credentials")
    }
  }

  return (
    <div className="contact">
      <div className="Contactcontainer">
        <h1 className="contactHeading">Login</h1>

        <form onSubmit={LoginUser}>

          <input
            type={"email"}
            className="contactinput"
            name=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            type={"password"}
            className="contactinput"
            name=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button className="signButton" type="submit" >
            Login
          </button>

        </form>
        <small className="small"> Don't have an account. <a href = "http://localhost:3000/sign-up">signUp Here</a></small>
      </div>
    </div>
  );
};

export default Login;