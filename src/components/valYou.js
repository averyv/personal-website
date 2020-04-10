import React from 'react';
import { Layout, Typography } from 'antd';
import NavBar from './navBar';
import FooterBar from './footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

class VibeDiner extends React.Component {
  render() {
    return (
    <div className="App">
      <Layout>
        <NavBar page="work"/>
          <Content className="page-content" >
            <Typography id="valyou-description">
              <Title className="project-title">
                  ValYou - React Native
              </Title>
                <Paragraph className="project-description">
                  ValYou is a mobile application that I am currently building in a team of six for CS98: Senior Design and Implementation, my culminating Computer Science experience at Dartmouth College.  
                  This is a two term course, during which we perform iterative requirements analysis, design, implementation, and testing. 
                </Paragraph>
                <Paragraph className="project-description">
                  Our app is built upon the realization that many people seem to lose sight of what matters most to them in the routine of our busy daily lives.  We recognized that there was a widespread desire amongst 
                  people to change the way they were living their lives and we wanted to provide a solution.
                  To do so, we adapted the Miller Value Card Sort psychology exercise to create an app that helps users identify their core values and start living a life that is more in line with what they value. 
                  Our app allows users to feel more self-reflective and fulfilled through goal-setting and activity-logging.  We have developed individual usage and data visualization, and are currently working
                  on transforming the app into a social platform, so users can share their progress with their loved ones and encourage each other to live a more value-driven life.
                </Paragraph>
                <Paragraph className="project-description">
                  <a href="https://www.figma.com/proto/6HzjEej77yuROkJc0DvXFT/valYOU-designs?node-id=36%3A13&scaling=scale-down"> Figma Designs</a>
                </Paragraph>
             </Typography>
            <div id="valyou-screenshots">
              <img alt="valyou home screenshot" src={require("../img/valyou-home.png")} />
              <img alt="valyou sorting page" src={require("../img/valyou-sort.png")} />
              <img alt="valyou home tab" src={require("../img/valyou-home-tab.png")}/>
              <img alt="valyou progress chart" src={require("../img/valyou-progress.png")} />
            </div>
          </Content>
        </Layout>
        <FooterBar/>
    </div>
  );}
}

export default VibeDiner;
