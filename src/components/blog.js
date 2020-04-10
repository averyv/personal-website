import React from 'react';
import { Layout, Typography } from 'antd';
import NavBar from './navBar';
import FooterBar from './footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

class Blog extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NavBar/>
          <Content className="page-content" >
            <Typography id="blog-description">
              <Title>
                Blog - React, Redux, Express, CSS
              </Title>
              <Paragraph className="project-description">
                A React+Redux blog platform built for CS52: Full-Stack Web Development, which makes CRUD api calls to an express and mongoDB server.  
                Users can view thumbnails for all the blog posts and click on each post to see a more detailed view of the post appears that shows the content.
                Users can create accounts with a username, email, and password; only authorized users can edit and delete posts.
              </Paragraph>
              <Paragraph className="project-description">
                <a href="http://averyv-cs52-lab4.surge.sh/">
                    URL to hosted page.
                </a>
               </Paragraph>
            </Typography>
            <div className="website-screenshots">
              <img alt="blog home" src={require("../img/blog-home.png")} />
              <img alt="blog specific" src={require("../img/blog-specific.png")} />
            </div>
          </Content>
        </Layout>
        <FooterBar/>
      </div>
  );}
}

export default Blog;
