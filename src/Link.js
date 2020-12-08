import React from "react";
import "./css/Link.css";

function Link({ longUrl, shortUrl }) {
  return (
    <li className="link">
      <p className="link__long">{longUrl}</p>
      <div className="link__other">
        <p className="link__short">{shortUrl}</p>
        {true ? (
          <button>Copy</button>
        ) : (
          <button className="copied">Copied!</button>
        )}
      </div>
    </li>
  );
}

export default Link;
