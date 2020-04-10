import React from 'react';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;

function NavBar(props) {
  if (props.page === 'about') {
    return (
      <Header className="nav-bar">
        <Text className="header-text">AVERY VANACORE</Text>
          <div id="nav-link-container">
            <div className="nav-link-unselected">
              <Link className="nav-link" to="/"> 
                <Text className="header-text">WORK</Text>
              </Link>
          </div>
          <div className="nav-link-selected">
            <Link className="nav-link" to="/about">
              <Text className="header-text-selected">ABOUT</Text>
            </Link>
          </div>
        </div>
      </Header>
      );}
  else {
    return (
      <Header className="nav-bar">
        <Text className="header-text">AVERY VANACORE</Text>
          <div id="nav-link-container">
            <div className="nav-link-selected">
              <Link className="nav-link" to="/"> 
                <Text className="header-text-selected">WORK</Text>
              </Link>
            </div>
            <div className="nav-link-unselected">
              <Link className="nav-link" to="/about">
                <Text className="header-text">ABOUT</Text>
              </Link>
            </div>
          </div>
      </Header>
    );
  }
}

export default NavBar;
