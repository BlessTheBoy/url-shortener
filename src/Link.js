import React, { useRef, useState } from "react";
import "./css/Link.css";
import ClipboardJS from "clipboard";

function Link({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);
  const linkRef = useRef(null);
  let name = `#${shortUrl.slice(11)}`;
  var clipboard = new ClipboardJS(name);

  clipboard.on("success", function (e) {
    console.log(e);
    setCopied(true);
  });

  clipboard.on("error", function (e) {
    console.log(e);
  });
  return (
    <li className="link">
      <p className="link__long">{longUrl}</p>
      <div className="link__other">
        <p
          ref={linkRef}
          id={shortUrl.slice(11) + "btn"}
          className="link__short">
          {shortUrl}
        </p>
        {!copied ? (
          <button
            data-clipboard-action="copy"
            data-clipboard-target={`#${shortUrl.slice(11)}btn`}
            id={shortUrl.slice(11)}>
            Copy
          </button>
        ) : (
          <button className="copied">Copied!</button>
        )}
      </div>
    </li>
  );
}

export default Link;
