import React from "react";
import LinkInput from "./LinkInput";
import "./css/Links.css";
import LinkList from "./LinkList";

function Links() {
  return (
    <div className="links">
      <div className="links__container">
        <LinkInput />
        <LinkList />
      </div>
    </div>
  );
}

export default Links;
