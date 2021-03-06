import React, { useEffect, useState } from "react";
import "./css/LinkList.css";
import { db } from "./firebase";
import Link from "./Link";
import { Link as RouterLink } from "react-router-dom";

function LinkList({ user }) {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    user?.displayName &&
      db
        .collection(user?.displayName.trim())
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setLinks(snapshot.docs.map((doc) => doc.data()));
        });
  }, [user]);
  return (
    <ul className="linkList">
      {links.slice(0, 3).map((link) => (
        <Link
          key={link.shortUrl}
          longUrl={link.longUrl}
          shortUrl={link.shortUrl}
        />
      ))}
      {links.length > 3 && <RouterLink to="/links">View Full-list</RouterLink>}
    </ul>
  );
}

export default LinkList;
