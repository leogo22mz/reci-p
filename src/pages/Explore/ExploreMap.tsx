import React from 'react';
import { Input, FloatButton } from "antd";
import Toolbar from "../../components/toolbar/toolbar";
import Recipe from "../../components/recipe/recipe";
import { GlobalOutlined } from '@ant-design/icons';
import "./Explore.css";
import { useNavigate } from "react-router-dom";

function ExploreMap() {
  const navigate = useNavigate();

  const goToExplore = () => {
    navigate('/Explore');
  };

  return (
    <div className="explore-background">
      <h1>Explore</h1>
      <FloatButton 
        type="primary" 
        className="switch-to-list-button" 
        icon={<GlobalOutlined />} 
        tooltip={<div>Hide Map</div>} 
        onClick={goToExplore}
      />
      <div className="recipe-list">
        <Input placeholder="Search recipes" />
        <br />
        <div className='map-container'>
        <img className="map" src="/img/map.png" alt="Map" />
        </div>
        <br />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <Toolbar />
    </div>
  );
}

export default ExploreMap;
