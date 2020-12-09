import React, { useEffect, useState } from "react";
import "./css/FullLinkList.css";
import { db } from "./firebase";
import Link from "./Link";

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
    <ul className="fullLinkList">
      {links.map((link) => (
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
