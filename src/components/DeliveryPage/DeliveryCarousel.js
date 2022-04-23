import React from "react";
import "../../css/delivery.css";
import { Carousel } from "antd";

function DeliveryCarousel() {
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
        <h2 className="deliverySectionTitle">
          Inspiration for your first order
        </h2>

        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/4/52924/fb5b2d44143ea8a6f04fc00c640648b8_o2_featured_v2.jpg?output-format=webp"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/4/50714/d43f38aa6a83520234c80570f119ffe5_o2_featured_v2.jpg?output-format=webp"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/4/800894/3a0714eeafd6a9d526ebe0262cfec1f1_o2_featured_v2.jpg"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt="foodItemsImage"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/0/800260/0094c2b5485c4c2f52c931306442269b_o2_featured_v2.jpg"
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

export default DeliveryCarousel;
