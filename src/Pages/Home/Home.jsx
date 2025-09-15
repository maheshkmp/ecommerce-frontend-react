import "./Home.css";

function Home() {
  return (
    <>
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
      <div>
        <div className="itemArea">
          <h1 className="itemBox1">
            <div className="itemPic">
              <img
                className="greenTshirt"
                src="/../UI/image/tshirt2.png"
                alt="green tshirt"
              />
            </div>
          </h1>
          <h1 className="itemBox1">This is body area</h1>
          <h1 className="itemBox1">This is body area</h1>
          <h1 className="itemBox1">This is body area</h1>
          <h1 className="itemBox1">This is body area</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
