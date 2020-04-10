import React from 'react';
import { Layout, Card } from 'antd';
import NavBar from './navBar';
import FooterBar from './footer';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Meta } = Card;

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NavBar/>
          <Content className="page-content" id="home-page-content">
            <Link to='/valyou'>
              <Card
                hoverable
                size={"small"}
                className="project-card"
                cover={<img alt="valyou logo" src={require("../img/logo.png")} />}
              >
                <Meta title="ValYou" className="project-card-meta" description="Team-based two-term project for CS98: Senior Design and Implementation Project" />
              </Card>
            </Link>
            <Link to='/vibe-diner'>
              <Card
                hoverable
                size={"small"}
                className="project-card"
                cover={<img alt="vibe diner logo" src={require("../img/logo_transparent.png")} />}
              >
                <Meta className="project-card-meta" title="VibeDiner" description="Team-based final project for CS52: Full-Stack Web Development" />
              </Card>
            </Link>
            <Link to='/blog'>
              <Card
                hoverable
                size={"small"}
                className="project-card"
                cover={<img alt="blog screenshot" src={require("../img/blog.png")} />}
              >
                <Meta className="project-card-meta" title="Full-Stack Blog" description="Front-end and Blog platform" />
              </Card>
            </Link>
            <Link to='/landing-page'>
              <Card
                hoverable
                size={"small"}
                className="project-card"
                cover={<img alt="landing page logo" src={require("../img/landing-page-logo.svg")} />}
              >
                <Meta className="project-card-meta" title="Landing Page" description="Landing page made only with HTML and CSS" />
              </Card>
            </Link>
          {/* <Link to='/notes'>
              <Card
              hoverable
              size={"small"}
              style={{ width: 260 }}
              className="project-card"
              cover={<img alt="example" src={require("../img/note.png")} />}
              >
              <Meta className="project-card-meta" title="Notes" description="Front-end and Blog platform" />
              </Card>
          </Link> */}
          </Content>
          <FooterBar/>
        </Layout>
      </div>
  );}
}

export default Home;
