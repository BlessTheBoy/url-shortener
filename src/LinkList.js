import React, { useEffect, useState } from "react";
import "./css/LinkList.css";
import Link from "./Link";

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
        <Link
          key={link.shortUrl}
          longUrl={link.longUrl}
          shortUrl={link.shortUrl}
        />
      ))}
    </ul>
  );
}

export default LinkList;
