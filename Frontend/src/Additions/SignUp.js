import React, { useState } from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerUser(event) {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
      }),
    });
  }

  return (
    <div className="contact">
      <div className="Contactcontainer">
        <h1 className="contactHeading">Sign Up</h1>

        <form onSubmit={registerUser} className="Form">
          <input
            type={"text"}
            className="contactinput"
            placeholder={"Username"}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
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
          <input
            type={"password"}
            className="contactinput"
            name=""
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <button className="signButton" type="submit">
            SignUp
          </button>
        </form>
        <small className="small">
          {" "}
          Already have an account. {" "}
          <a href="http://localhost:3000/login">Login Here</a>
        </small>
      </div>
    </div>
  );
};

export default Contact;
