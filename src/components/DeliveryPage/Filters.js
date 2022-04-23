import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../../css/filters.css";

function Filters() {
  return (
    <div className="filtersContainer max-width">
      <Button
        style={{
          borderRadius: "10px",
          height: "40px",

          boxShadow: "rgba(54, 54, 54, 0.06) 0px 1px 2px",
          border: "1px solid rgb(207, 207, 207)",
        }}
      >
        Filters
      </Button>
      <Button
        style={{
          borderRadius: "10px",
          height: "40px",

          boxShadow: "rgba(54, 54, 54, 0.06) 0px 1px 2px",
          border: "1px solid rgb(207, 207, 207)",
        }}
      >
        Rating
      </Button>
      <Button
        style={{
          borderRadius: "10px",
          height: "40px",

          boxShadow: "rgba(54, 54, 54, 0.06) 0px 1px 2px",
          border: "1px solid rgb(207, 207, 207)",
        }}
      >
        Delivery Time
      </Button>
      <Button
        style={{
          borderRadius: "10px",
          height: "40px",

          boxShadow: "rgba(54, 54, 54, 0.06) 0px 1px 2px",
          border: "1px solid rgb(207, 207, 207)",
        }}
      >
        Pure Veg
      </Button>
    </div>
  );
}

export default Filters;
