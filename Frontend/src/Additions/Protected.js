import React, { useState } from "react";

const Protected = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getTokenLocal() {
    return localStorage.getItem("token");
  }

  async function protectedLogin(event) {
    event.preventDefault();

    const accessToken = getTokenLocal();

    console.log(accessToken)

    if (!accessToken) {
      alert("No token bitch");
    }

    try {
      const response = await fetch("http://localhost:5000/api/protected-data", {
        method: "GET",

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      console.log(data.user);
      alert(`Welcome back ${data.user.name}`)
    } catch (error) {
      console.log("Error bitch");
    }
  }

  return (
    <div className="contact">
      <div className="Contactcontainer">
        <h1 className="contactHeading">Login</h1>
{/* 
        <form onSubmit={protectedLogin}>
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
          ></input> */}

          <button className="signButton" type="submit" onClick={protectedLogin}>
            Login
          </button>
        {/* </form> */}
        <small className="small">
          {" "}
          Don't have an account.{" "}
          <a href="http://localhost:3000/sign-up">signUp Here</a>
        </small>
      </div>
    </div>
  );
};

export default Protected;
