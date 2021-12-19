import './i18n';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products.jsx';
import Details from './pages/Details.jsx';
import Contact from './pages/Contact.jsx';
import Delivery from './pages/Delivery.jsx';
import About from './pages/About.jsx';
import Main from './pages/Main.jsx';
import Admin from './pages/Admin.jsx';
import PopupWindow from './components/PopupWindow.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';
import { useSelector } from 'react-redux';
 

const App = () => {
  const popupWindowShow = useSelector((state) => state.popupWindowShow);

  return (
    <Router>
      <div className={popupWindowShow == 'flex' ? 'overlay2' : 'overlay1'} />
      <div className={popupWindowShow == 'flex' ? 'overlay2' : 'overlay1'}>
        <Header />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/products">
            <Products act={'კალათაში'} />
          </Route>
          <Route
            path="/details/:id"
            render={(props) => <Details {...props} />}
          />
          <Route path="/delivery">
            <Delivery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
      <PopupWindow />
    </Router>
  );
};
export default App;
