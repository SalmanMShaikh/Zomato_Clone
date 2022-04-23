import React from "react";
import "../../css/header.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { BarChartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  const navigate = useNavigate();

  return (
    <section className="headerSection max-width">
      <div
        className={
          data.delivery ? "buttonsContainer borderBottom" : "buttonsContainer"
        }
        onClick={() => {
          dispatch(actions.setDelivery());
          navigate("/");
        }}
      >
        <div className={data.delivery ? "currentImage" : "imageOuterContainer"}>
          {data.delivery ? (
            <img
              alt="bikeImage"
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
              className="bikeImage"
            />
          ) : (
            <img
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
              className="bikeImage"
            />
          )}
        </div>
        <p className="headerDescription">Delivery</p>
      </div>

      <div
        className={
          data.diningOut ? "buttonsContainer borderBottom" : "buttonsContainer"
        }
        onClick={() => {
          dispatch(actions.setDiningOut());
          navigate("/dining");
        }}
      >
        <div
          className={data.diningOut ? "currentImage" : "imageOuterContainer"}
        >
          {data.diningOut ? (
            <img
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
              className="plateImage"
            />
          ) : (
            <img
              alt="plateImage"
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              className="plateImage"
            />
          )}
        </div>
        <p className="headerDescription">Dining Out</p>
      </div>

      <div
        className={
          data.nightLife ? "buttonsContainer borderBottom" : "buttonsContainer"
        }
        onClick={() => {
          dispatch(actions.setNightLife());
          navigate("/nightLife");
        }}
      >
        <div
          className={data.nightLife ? "currentImage" : "imageOuterContainer"}
        >
          {data.nightLife ? (
            <img
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
              className="nightLifeImage"
            />
          ) : (
            <img
              alt="nightlifeImage"
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              className="nightLifeImage"
            />
          )}
        </div>
        <p className="headerDescription">NightLife</p>
      </div>

      <div
        className={
          data.statisticsPage
            ? "buttonsContainer borderBottom"
            : "buttonsContainer"
        }
        onClick={() => {
          dispatch(actions.setStatisticsPage());
          navigate("/stats");
        }}
      >
        <div
          className={
            data.statisticsPage ? "currentImage" : "imageOuterContainer"
          }
        >
          <BarChartOutlined />
        </div>
        <p className="headerDescription">Statistics</p>
      </div>
    </section>
  );
}

export default Header;
