import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaSearch, FaBars, FaUserAlt } from "react-icons/fa";
import "./style.css";
import Products from "./components/Products";
import Contact from "./components/Contact.js";
import Delivery from "./components/Delivery.js";
import About from "./components/About.js";
import productsArray from "./components/constants.js";

const App = () => {
  const [activeMenuOption, setActiveMenuOption] = useState(-1);
  const [sidenavWidth, setSidenavWidth] = useState("0px");
  const [products, setProduct] = useState(productsArray);

  function addProduct(arg) {
    let product = { imgUrl: arg[0], price: arg[1] };
    setProduct([...products, product]);
  }

  /**open left side navbar or close it*/
  const openCloseNav = (e) => {
    e.stopPropagation();
    if (e.currentTarget.className != "closebtn") setSidenavWidth("100%");
    else setSidenavWidth("0px");
  };
  return (
    <Router>
      <SideNav
        arr={[
          setSidenavWidth,
          activeMenuOption,
          setActiveMenuOption,
          sidenavWidth,
          openCloseNav,
        ]}
      />
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

          <div id="admin">
            <Link to="/admin">
              <FaUserAlt />
              <span>Admin</span>
            </Link>
          </div>
        </div>
        <div className="menu">
          <Menu
            arr={[setSidenavWidth, activeMenuOption, setActiveMenuOption]}
          />
        </div>
      </header>

      <Switch>
        <Route path="/admin">
          <Admin addProduct={addProduct} />
        </Route>
        <Route path="/products">
          <Products products={products} />
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
          Copyright © 2021. Tariel Duishvili, All Rights Reserved.
        </div>
      </footer>
    </Router>
  );
};
export default App;

export const Admin = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  function handleChange(e) {
    let val = e.currentTarget.value;
    if (e.currentTarget.className == "url") setImgUrl(val);
    else setPrice(val);
  }
  return (
    <div className="common">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addProduct([imgUrl, price]);
        }}
      >
        <label>პროდუქტის დამატება</label>
        <input
          className="url"
          onChange={handleChange}
          value={imgUrl}
          placeholder="Image url"
        />
        <input
          className="price"
          onChange={handleChange}
          value={price}
          placeholder="Price"
        />
        <button>დამატება</button>
      </form>
    </div>
  );
};

export const Main = () => {
  return (
    <div className="common">
      <img src="https://www.coronainsights.com/wp-content/uploads/2014/11/Welcome.jpg" />
    </div>
  );
};

export const SideNav = (props) => {
  const setSidenavWidth = props.arr[0];
  const styles = {
    height: props.arr[3],
  };

  return (
    <div className="sidenav" style={styles}>
      <div id="logo"></div>
      <a className="closebtn" onClick={props.arr[4]}>
        <div id="closeIcon">&times;</div>
      </a>
      {/**This component is used two times with different arguments in header,here and below */}
      <Menu arr={[...props.arr]} />
      <Link
        to="/admin"
        onClick={() => {
          setSidenavWidth(0);
        }}
      >
        <div>
          <span>ადმინის პანელი</span>
        </div>
      </Link>
    </div>
  );
};

const Menu = (props) => {
  let setSidenavWidth = props.arr[0],
    activeMenuOption = props.arr[1],
    setActiveMenuOption = props.arr[2];
  const Border = "border-bottom";
  const Style = {
    /*'borderBottom': '3px solid rgb(35, 167, 75)'*/
    background: "rgb(12, 136, 185)",
  };
  return (
    <>
      <Link
        to="/"
        style={activeMenuOption == 0 ? Style : {}}
        onClick={() => {
          {
            setActiveMenuOption(0);
          }
          {
            setSidenavWidth(0);
          }
        }}
      >
        <div className="options">მთავარი</div>
      </Link>
      <Link
        to="/products"
        style={activeMenuOption == 1 ? Style : {}}
        onClick={() => {
          {
            setActiveMenuOption(1);
          }
          {
            setSidenavWidth(0);
          }
        }}
      >
        <div className="options">პროდუქცია</div>
      </Link>
      <Link
        to="/delivery"
        style={activeMenuOption == 2 ? Style : {}}
        onClick={() => {
          {
            setActiveMenuOption(2);
          }
          {
            setSidenavWidth(0);
          }
        }}
      >
        <div className="options">მიწოდების სერვისი</div>
      </Link>
      <Link
        to="/about"
        style={activeMenuOption == 3 ? Style : {}}
        onClick={() => {
          {
            setActiveMenuOption(3);
          }
          {
            setSidenavWidth(0);
          }
        }}
      >
        <div className="options">ჩვენ შესახებ</div>
      </Link>
      <Link
        to="/contact"
        style={activeMenuOption == 4 ? Style : {}}
        onClick={() => {
          setActiveMenuOption(4);
          {
            setSidenavWidth(0);
          }
        }}
      >
        <div className="options">საკონტაქტო ინფორმაცია</div>
      </Link>
    </>
  );
};
