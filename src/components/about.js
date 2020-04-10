import React from 'react';
import  {Layout, Typography } from 'antd';
import NavBar from './navBar';
import FooterBar from './footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NavBar page="about"/>
          <Content className="page-content" id="about-page-content">
            <Typography id="about-description">
              <Title>
                About Myself:
              </Title>
              <Paragraph className="project-description">
                I am a senior at Dartmouth College studying Computer Science modified with Computer Science.
                I am graduating in June and am hoping to pursue a career in software development, 
                as I have loved the coding experience I have gotten through my courses at Dartmouth, my internships, and my individual projects.
                In particular, I am drawn towards front-end programming and web development.  I am skilled in React.js, React Native, HTML, CSS, jQuery, and
                Python, and I am proficient in C and Java.
              </Paragraph>
              <Paragraph className="project-description">
                LinkedIn: <a href="https://www.linkedin.com/in/avery-vanacore/"> https://www.linkedin.com/in/avery-vanacore/</a>
              </Paragraph>
              <Paragraph className="project-description">
                GitHub: <a href="https://github.com/averyv"> https://github.com/averyv</a>
              </Paragraph>
              <Paragraph className="project-description">
                Email: Avery.E.Vanacore.20@Dartmouth.EDU
              </Paragraph>
             </Typography>
             <img alt="sorting" src={require("../img/personal-photo.jpg")} />
          </Content>
        <FooterBar />
      </Layout>
    </div>
  );}
}

export default About;
