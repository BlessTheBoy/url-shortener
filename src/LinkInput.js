import React, { useState } from "react";
import "./css/LinkInput.css";

function LinkInput() {
  const [input, setInput] = useState("");
  const shorten = (e) => {
    e.preventDefault();

    //shorten link
    setInput("");
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
        />
        <button className="linkInput__button" type="submit" onClick={shorten}>
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default LinkInput;
