import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="L1">
      <h1>Hurry, offer ends soon</h1>
      <p>
        Shop your favorite items and enjoy an exclusive 20% discount on
        everything.
      </p>
      <p>don't mis out!</p>
      <button className="getOfferBtn">Get offer</button>
      <button className="moreOfferBtn">More offers</button>
    </div>
  );
}

export default Home;
