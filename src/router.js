import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutPage from './containers/AboutPage'
import TopPage from './containers/TopPage'
import DiaryPage from './containers/DiaryPage'
import ContactPage from './containers/ContactPage'
import TopNav from './containers/Topnav';
import Shopcart from './containers/ShopCart';


const MainRouter = () => (
  <Router>
    <div className="MainNav">
      <TopNav/>
      <Route exact path="/" component={TopPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/diary" component={DiaryPage} />
      <Route path="/shop" component={Shopcart}/>
      <Route path="/contact" component={ContactPage} />
    </div>
  </Router>
);

export default MainRouter;