import React from "react";
import "../../css/delivery.css";
import { Carousel } from "antd";

function NightLifeCarousel() {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "20px",
  };

  return (
    <section className="deliverySection">
      <div className="max-width">
        <h2 className="deliverySectionTitle">Collections</h2>

        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/2/18888512/05526b9225c73b5d9849b3bf5eba2d53_featured_v2.jpg"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/7/18822687/6506e23ab7bfa5cc6568700b59c4696f_featured_v2.jpg"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/4/18772094/d198e41a7f7c42d19ad1a05df44f34e7_featured_v2.jpg"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/1/19288221/8956df730be465c27490b4b76fadc2a1_featured_v2.jpg"
                alt="foodItemsImage"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              />
            </h3>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default NightLifeCarousel;
