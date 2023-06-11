import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const use = {
      username: user,
      password: pwd,
    };

    try {
      const response = await axios.post("http://localhost:8080/login", use);
      if (response.data === "Login success") {
        alert("Login successful");
        setUser("");
        setPwd("");
        navigate("/components/pages/Home"); // Navigate to the home page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="loginform">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
          />
          <button><a type="button" href="/Home">LOGIN</a></button>
        </form>
        <h4>Don't have an Account?</h4>
        <Link to="/SignupPage" className="font1">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
