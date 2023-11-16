import React, { useState, useEffect } from "react";
import Data from "./Data";

const App = () => {
  // Api url
  const url = "https://jsonplaceholder.typicode.com/posts";
  // initializing state
  const [showData, setshowData] = useState([]);

  // function
  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setshowData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h5
        style={{
          textAlign: "center",
          height: "100px",
          justifyContent: "center",
          display: "flex",
          lineHeight: "100px",
          background: "blueviolet",
          color: "white",
        }}
      >
        React Accordion
      </h5>
      <div className="row">
        {showData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <Data {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
