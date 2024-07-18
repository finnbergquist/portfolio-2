// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ContactPage from './components/ContactPage/ContactPage';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <BackgroundVideo />
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;