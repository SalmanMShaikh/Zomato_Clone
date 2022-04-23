import React from "react";
import "../../css/delivery.css";
import { Carousel } from "antd";

function DiningCarousel() {
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
                src="https://b.zmtcdn.com/data/pictures/4/54044/a695d37bfdc8cef693279f7f27c3179a_featured_v2.jpg?output-format=webp"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/5/51705/571547c0cf08b237baebd60dc549fc6d_featured_v2.jpg?output-format=webp"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/2/18580202/34041805cda48a7ed95d7dfa6b78288d_featured_v2.jpg?output-format=webp"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/3/19122613/b449de49b3a577de34d51f797f39e3e0_featured_v2.jpg?output-format=webp"
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

export default DiningCarousel;
