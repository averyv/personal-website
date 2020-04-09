import React from 'react';

import {Layout, Card, Typography} from 'antd';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
// import 'antd/dist/antd.css';
import FooterBar from './footer';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const {Meta} = Card;

class Notes extends React.Component {
  render() {
    return (
    <div className="App">
      <Layout>
        <NavBar/>
        
        <Content className="page-content" >
        
        <Typography id="vibe-diner-description">
            <Title>
                ValYou
            </Title>
            <Text strong>About:</Text>
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
               <Paragraph>
               <Text>URL to hosted page:
                    </Text><a href="http://averyv-cs52-lab4.surge.sh/">
                    http://averyv-cs52-lab4.surge.sh/
                </a>
                
               </Paragraph>
        
            
        </Typography>
        <div id="valyou-screenshots">
        <img style={{ width: 500 }} alt="sorting" src={require("../img/notes.png")} />
          
        </div>
        </Content>
        
        </Layout>
        <FooterBar/>
     
    </div>
  );}
}

export default Notes;
