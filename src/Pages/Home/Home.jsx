import "./Home.css";

function Home() {
  return (
    <div className="clearfix L1">
      <div className="topLeft">TL</div>
      <div className="topRight">TR</div>
      <div className="bottomLeft">
        <h2>Hurry, offer ends soon</h2>
        <p>
          Shop your favorite items and enjoy an exclusive 20% discount on
          everything.
        </p>
        <p>don't mis out!</p>
        <button className="getOfferBtn">Get offer</button>
        <button className="moreOfferBtn">More offers</button>
      </div>
      <div className="bottomRight">BR</div>
    </div>
  );
}

export default Home;
