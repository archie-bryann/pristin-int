import React from "react";
import "./Body.css";
import Image1 from "../../image/IMG_0722.jpg";
import Image2 from "../../image/IMG_0723.jpg";
import Image3 from "../../image/IMG_0724.jpg";

const customStyle = {
  width: "350px",
};

function Body() {
  return (
    <div
      className="bootstrap-wrapper"
      style={{ textAlign: "center", marginLeft: "70px", marginRight: "70px" }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Our Gallery</h1>
      </div>
      <div style={{ height: "30px" }}></div>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <img src={Image1} style={customStyle} />
        </div>
        <div className="col-sm-12 col-lg-4">
          <img src={Image2} style={customStyle} />
        </div>
        <div className="col-sm-12 col-lg-4">
          <img src={Image3} style={customStyle} />
        </div>
      </div>
    </div>
  );
}

export default Body;
