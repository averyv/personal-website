import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterBar extends React.Component {
  render() {
    return (
      <Footer className="page-footer">
        <div id="social-icons">
          <a href="https://www.linkedin.com/in/avery-vanacore/">
            <img alt="linkedin logo" src={require("../img/linkedin.png")}/>
          </a>
          <a href="https://github.com/averyv">
            <img alt="github logo" src={require("../img/github.png")}/>
          </a>
        </div>
        <p id="footer-text">Coded by Avery Vanacore.  Code published at <a href="https://github.com/averyv/personal-website"> https://github.com/averyv/personal-website</a></p> 
      </Footer>
  );}
}

export default FooterBar;
