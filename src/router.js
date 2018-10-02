import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutPage from './container/AboutPage'
import TopPage from './container/TopPage'
import DiaryPage from './container/DiaryPage'
import ContactPage from './container/ContactPage'
import TopNav from './container/Topnav';


const MainRouter = () => (
  <Router>
    <div className="MainNav">
      <TopNav/>
      <Route exact path="/" component={TopPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/diary" component={DiaryPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  </Router>
);

export default MainRouter;