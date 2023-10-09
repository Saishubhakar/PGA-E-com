import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function alert(message){
    window.alert(message)
  }

  useEffect(()=>{
    alert("You are not login, Please login");
  }, [1])


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

    const data = await response.json()
    const userToken = data.data.accessToken
    localStorage.setItem("token", userToken)
    localStorage.setItem("LoggedIn", true)
    const logg = localStorage.getItem("LoggedIn")
    console.log(logg, "LoggedIn")

    if(logg && status === 200){
      window.location.href = "http://localhost:3000/PGA"
    }
    else{
      alert("Enter valid credentials please")
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