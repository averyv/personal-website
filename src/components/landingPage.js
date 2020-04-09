import React from 'react';
import { Layout, Typography } from 'antd';
import NavBar from './navBar';
import FooterBar from './footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

class LandingPage extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NavBar page="work"/>
          <Content className="page-content" >
            <Typography id="vibe-diner-description">
              <Title className="project-title">
                Landing Page - HTML, CSS
              </Title>
              <Paragraph className="project-description">
                A landing page for a pretend company, "StarBuch", which mimics different parts of the style and structure of the Starbucks and Blue Bottle Coffee landing pages.
                It is non-functional, but has a responsive navigation menu, expanding images, text input bars, and a footer with links that are responsive.
              </Paragraph>
              <Paragraph className="project-description">
                <a href="https://dartmouth-cs52-19s.github.io/lab1-landingpage-averyv/"> URL to hosted page.</a>
              </Paragraph>   
            </Typography>
            <div className="website-screenshots" id="landing-page-screenshots">
              <img alt="landing page screenshot 1" src={require("../img/landing-page.png")} />
              <img alt="landing page screenshot 2" src={require("../img/landing-page-2.png")} />
            </div>
          </Content>
        </Layout>
      <FooterBar/>
    </div>
  );}
}

export default LandingPage;
