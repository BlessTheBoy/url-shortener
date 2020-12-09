import React from "react";
import LinkInput from "./LinkInput";
import "./css/Links.css";
import LinkList from "./LinkList";

function Links({ user }) {
  return (
    <div className="links">
      <div className="links__container">
        <LinkInput user={user} />
        <LinkList user={user} />
      </div>
    </div>
  );
}

export default Links;
