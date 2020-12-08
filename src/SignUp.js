import React from "react";
import "./css/SignUp.css";

function SignUp() {
  return (
    <div class="container-main">
      <h1>Sign up to join Code Girl</h1>
      <div class="container-form">
        <form action="">
          <div class="input-container">
            <label for="first-name">Name</label>
            <div class="inputs">
              <input type="text" name="first-name" id="" placeholder="first" />
              <input type="text" name="last-name" id="" placeholder="last" />
            </div>
          </div>
          <div class="input-container">
            <label for="email">Email</label>
            <input type="email" name="email" id="" placeholder="email" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
