import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './components/homePage';
import VibeDiner from './components/vibeDiner';
import ValYou from './components/valYou';
import About from './components/about';
import Blog from './components/blog';
import LandingPage from './components/landingPage';
// import Notes from './components/notes';

import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/vibe-diner" component = {VibeDiner} />
            <Route path="/valyou" component = {ValYou} />
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/landing-page" component={LandingPage}/>
            {/* <Route path="/notes" component={Notes}/> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
