import React, { useState } from "react";

const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function deleteUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/delete", {
      method: "DELETE",

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
      window.alert("Deleted account successfully")
      window.location.href = "http://localhost:3000/"
    }
    else{
      window.alert("Invalid credentials")
    }
  }

  return (
    <div className="contact">
      <div className="Contactcontainer">
        <h1 className="contactHeading">Delete Account</h1>

        <form onSubmit={deleteUser}>

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
            Delete Account
          </button>

        </form>

      </div>
    </div>
  );
};

export default DeleteUser;