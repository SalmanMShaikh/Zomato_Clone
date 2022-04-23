import React from "react";
import "../../css/exploresection.css";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions";

function ExploreSection({ data, sectionName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="exploreSection max-width">
      <h2 className="deliverySectionTitle">{sectionName}</h2>

      <div className="exploreCardContainer">
        {data.map((object) => {
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
              onClick={() => {
                console.log("hello");
                dispatch(actions.saveCurrentObject(object));
                navigate("/checkout");
              }}
            >
              <div className="flex">
                <p className="discount">{object.bulkOffers[0].text}</p>{" "}
                <p className="deliveryTime">{object.order.deliveryTime}</p>
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
                <p className="cardDescription">{object.info.cuisine[0].name}</p>{" "}
                <p className="cardDescription">{object.info.cfo.text}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreSection;
