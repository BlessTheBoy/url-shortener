import React, { useState } from "react";
import "./css/SignUp.css";
import { auth, uiConfig } from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-main">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      <div className="container-form">
        <h1>Sign up</h1>
        <form action="">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
