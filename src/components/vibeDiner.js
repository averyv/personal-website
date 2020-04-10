import React from 'react';
import { Layout, Typography} from 'antd';
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
          <Layout id="vibe-diner-container">
            <Content className="page-content" >
              <Typography id="vibe-diner-description">
                <Title>
                  VibeDiner - React, Redux, CSS
                </Title>
                <Paragraph className="project-description">
                  VibeDiner was created as a team based final project for CS52: Full-Stack Web Development at Dartmouth College.  
                  In three weeks, my four teammates and I built the front-end UI (using Ant Design) and server-side API for this site, then presented the final product to professors, teaching assistants, and other interested students at the termly Technigala.
                </Paragraph>
                <Paragraph className="project-description">
                  The app is a platform that facilitates musical collaboration.  We recognized that many individuals have specific musical talents,
                  but not many have every skill needed to produce a song.  On VibeDiner, users can build profiles and post their current projects to attract other artists who
                  have the skills that the original poster is lacking. 
                  Users can scroll through these projects and filter them by relevant tags and, if interested, they can chat with each other about the project.
                  I individually built the messaging component of the site using a websocket based server for realtime updates, and also contributed to many other features.
                </Paragraph>
                <Paragraph className="project-description">
                  The credentials for a test account are: email: test, password: test.
                </Paragraph>
                <Paragraph>
                  <a href="http://vibediner.surge.sh/">
                    URL to hosted page.
                  </a>
                </Paragraph>    
              </Typography>
              <div className="website-screenshots" id="vibediner-screenshots">
                <img alt="vibe diner home" src={require("../img/vibe-diner-home.png")} />
                <img alt="vibe diner feed" src={require("../img/vibe-diner-feed.png")} />
                <img alt="vibe diner profile" src={require("../img/vibe-diner-profile.png")}/>
                <img alt="vibe diner messages" src={require("../img/vibe-diner-messages.png")} />
              </div>
            </Content>
          </Layout>
        <FooterBar/>
      </Layout>
    </div>
  );}
}

export default VibeDiner;
