import React from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "../../css/navbar.css";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { Search } = Input;
  const dispatch = useDispatch();
  const onSearch = (e) => dispatch(actions.saveSearchInput(e.target.value));

  return (
    <div className="navbar max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomatoLogo"
        className="zomatoLogo"
      />

      <Space direction="vertical" className="searchbarContainer">
        <Search
          placeholder="search for dish"
          onChange={onSearch}
          enterButton
          onClick={() => {
            navigate("/search");
            dispatch(actions.saveSearchInput(""));
          }}
        />
      </Space>
      <div className="navbarRightSide">
        <UserOutlined style={{ fontSize: "30px" }} />
        <h2 className="userName">Salman</h2>
      </div>
    </div>
  );
}

export default Navbar;
