import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaSearch,FaBars,FaUserAlt } from "react-icons/fa";
import "./style.css";
import Products from "./components/Products";
import Contact from "./components/Contact.js";
import Delivery from "./components/Delivery.js";
import About from "./components/About.js";

const App = () => {
  const [sidenavWidth, setSidenavWidth] = useState("0px");
  /**open left side navbar or close it*/
  const openCloseNav = (e) => {
    e.stopPropagation();
    if (e.target.className !== "closebtn") setSidenavWidth("300px");
    else setSidenavWidth("0px");
  };
  return (
    <Router>
      <SideNav arr={[sidenavWidth, openCloseNav]} />
      <header>
        <div className="headerTop">
          <div id="menuIcon">
            <FaBars onClick={openCloseNav} />
            <span>MyShop</span>
          </div>

          <div id="searchBar">
            <span>
              <input placeholder="Search.." />
              <FaSearch className="searchIcon" />
            </span>
          </div>

          <div id="user">
        <FaUserAlt/>
        </div>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </header>

      <Switch>
        <Route path="/products">
          <Products />
        </Route>
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

      <footer>
        <div className="copyright">
          ©2021 ყველა უფლება დაცულია. ტარიელ დუიშვილი{" "}
        </div>
      </footer>
    </Router>
  );
};
export default App;

export const Main = () => {
  return (
    <div className="common">
      <img src="https://www.coronainsights.com/wp-content/uploads/2014/11/Welcome.jpg" />
    </div>
  );
};

export const SideNav = (props) => {
  const styles = {
    width: props.arr[0],
  };

  return (
    <div className="sidenav" style={styles}>
      <div id="closeIcon">
        <a className="closebtn" onClick={props.arr[1]}>
          &times;
        </a>
      </div>
      {/**This component is used two times with different arguments in header,here and below */}
      <Menu />
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <div className="options">
        <Link to="/">მთავარი</Link>
      </div>
      <div className="options">
        <Link to="/products">პროდუქცია</Link>
      </div>
      <div className="options">
        <Link to="/delivery">მიწოდების სერვისი</Link>
      </div>
      <div className="options">
        <Link to="/about">ჩვენ შესახებ</Link>
      </div>
      <div className="options">
        <Link to="/contact">საკონტაქტო ინფორმაცია</Link>
      </div>
    </>
  );
};
