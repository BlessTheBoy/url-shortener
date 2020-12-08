import React, { useEffect, useState } from "react";
import "./css/LinkList.css";

function LinkList() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    setLinks([
      {
        longUrl: "https://github.com/BlessTheBoy",
        shortUrl: "rebrand.ly/dtunv",
      },
      {
        longUrl: "https://www.youtube.com/watch?v=FQS4rRVT2IA",
        shortUrl: "rebrand.ly/81nme",
      },
      {
        longUrl: "https://www.youtube.com/watch?v=UYXo5y6vp2o",
        shortUrl: "rebrand.ly/mfikd",
      },
    ]);
  }, []);
  return (
    <ul className="linkList">
      {links.slice(0, 3).map((link) => (
        <li key={link.shortUrl} className="link">
          <p className="link__long">
            {link.longUrl.length > 25
              ? link.longUrl.slice(0, 25) + "..."
              : link.longUrl}
          </p>
          <div className="link__other">
            <p className="link__short">{link.shortUrl}</p>
            <button>Copy</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
