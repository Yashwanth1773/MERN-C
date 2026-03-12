import React, { useState } from "react";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(username === "admin" && password === "1234"){
      setIsLoggedIn(true);
    }
    else{
      alert("Invalid username or password");
    }
  };

  return (

    <div className="login-container">

      <h1 className="title">Login Form</h1>

      <div className="login-box">

        <h2>Login Here</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <div className="options">
            <label>
              <input type="checkbox"/> Remember me
            </label>
            <span className="forgot">Forgot Password?</span>
          </div>

          <button type="submit">LOGIN</button>

        </form>

      </div>

    </div>
  );
};

export default Login;