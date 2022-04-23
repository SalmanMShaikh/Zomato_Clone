import React from "react";
import "../../css/exploresection.css";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";

function SearchSection({ data, sectionName }) {
  const searchInput = useSelector((state) => state.reducer.searchInput);

  return (
    <div className="exploreSection max-width">
      <h2 className="deliverySectionTitle">{sectionName}</h2>

      <div className="exploreCardContainer">
        {data.map((object) => {
          if (
            object.info.cuisine[0].name
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          ) {
            return (
              <Card
                hoverable
                style={{
                  width: 340,
                  height: "24rem",
                  borderRadius: "20px",
                  padding: "10px",
                }}
                cover={
                  <img
                    alt="example"
                    src={object.info.image.url}
                    height="240px"
                    style={{ borderRadius: "20px" }}
                  />
                }
              >
                <div className="flex">
                  <p className="deliveryTime">{object.distance}</p>
                </div>
                <div className="flex ">
                  <h4 className="cardTitle">{object.info.name}</h4>{" "}
                  <p
                    className="rating"
                    style={{
                      backgroundColor: `#${object.info.rating.rating_color}`,
                    }}
                  >
                    {object.info.rating.rating_text}
                    <StarFilled />
                  </p>
                </div>
                <div className="flex ">
                  <p className="cardDescription">
                    {object.info.cuisine[0].name}
                  </p>{" "}
                  <p className="cardDescription">{object.info.cfo.text}</p>
                </div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SearchSection;
