import React from 'react';
import { Input, FloatButton } from "antd";
import Toolbar from "../../components/toolbar/toolbar";
import Recipe from "../../components/recipe/recipe";
import { GlobalOutlined } from '@ant-design/icons';
import "./Explore.css";
import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate('/ExploreMap');
  };

  return (
    <div className="explore-background">
      <h1>Explore</h1>
      <FloatButton 
        type="primary" 
        className="switch-to-map-button" 
        icon={<GlobalOutlined />} 
        tooltip={<div>Show Map</div>} 
        onClick={goToMap}
      />
      <div className="recipe-list">
        <Input placeholder="Search recipes" />
        <br />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <Toolbar />
    </div>
  );
}

export default Explore;
