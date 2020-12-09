import React, { useRef, useState } from "react";
import "./css/LinkInput.css";
import { db } from "./firebase";
import firebase from "firebase";

function LinkInput({ user }) {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);
  const errorRef = useRef(null);
  const shorten = async (e) => {
    e.preventDefault();

    if (!input) {
      inputRef.current.classList.add("error");
      errorRef.current.classList.remove("success");
      setErrorMessage("Enter or paste a link to shorten");
    } else if (!user) {
      inputRef.current.classList.add("error");
      errorRef.current.classList.remove("success");
      setErrorMessage("login to shorten link!");
    } else {
      await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        body: JSON.stringify({
          destination: input,
          domain: { fullName: "rebrand.ly" },
        }),
        headers: {
          "Content-Type": "application/json",
          apikey: "d864825b80f847e38387de880a8e15c8",
          // "workspace": "YOUR_WORKSPACE_ID"
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("operation successful", data.shortUrl);
          db.collection(user.displayName.trim()).add({
            longUrl: input,
            shortUrl: data.shortUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
        .catch((err) => {
          inputRef.current.classList.add("error");
          setErrorMessage("Error making request!");
          errorRef.current.classList.remove("success");
          console.log(err.message);
        });
      // add request to user's data

      inputRef.current.classList.remove("error");
      errorRef.current.classList.add("success");
      setErrorMessage("Successfull!");

      setInput("");
    }

    //shorten link
  };
  return (
    <div className="linkInput">
      <form className="linkInput__form">
        <input
          className="linkInput__input"
          type="text"
          name=""
          id=""
          placeholder="shorten a link here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <small ref={errorRef}>{errorMessage}</small>
        <button className="linkInput__button" type="submit" onClick={shorten}>
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default LinkInput;
