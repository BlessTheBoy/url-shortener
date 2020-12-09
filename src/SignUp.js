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
    </div>
  );
}

export default SignUp;
