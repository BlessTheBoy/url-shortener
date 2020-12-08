import { useEffect } from "react";
import React from "react";

function Test() {
  useEffect(() => {
    fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      body: JSON.stringify({
        destination: "https://www.youtube.com/watch?v=UYXo5y6vp2o",
        domain: { fullName: "rebrand.ly" },
      }),
      headers: {
        "Content-Type": "application/json",
        apikey: "d864825b80f847e38387de880a8e15c8",
        // "workspace": "YOUR_WORKSPACE_ID"
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("operation successful", data.shortUrl))
      .catch((err) => console.log("Error performing request"));
    // fetch("https://api-ssl.bitly.com/v4/shorten", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer {cbe5a52ea2be8c3c1d3a34fa40fb5d416b191ae7}",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     long_url:
    //       "https://blog.rebrandly.com/8-best-free-url-shortener-apis-for-creating-your-short-links/",
    //     domain: "bit.ly",
    //     group_guid: "Ba1bc23dE4F",
    //   }),
    // })
    //   .then((response) => response.json)
    //   .then((data) => console.log("operation successful", data))
    //   .catch((err) => console.log("Error performing request"));
  }, []);

  return (
    <div>
      <h1>This is a test</h1>
    </div>
  );
}

export default Test;
