import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUserAlt } from 'react-icons/fa';
import { Wave } from 'react-animated-text';
import './style.css';
import Products from './components/Products';
import Contact from './components/Contact.js';
import Delivery from './components/Delivery.js';
import About from './components/About.js';
import Main from './components/Main.js';
import Menu from './components/Menu.js';
import SideNav from './components/Sidenav.js';
import Admin from './components/Admin.js';
import productsArray from './components/constants.js';
import './i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const App = () => {
  const [activeMenuOption, setActiveMenuOption] = useState(-1);
  const [sidenavWidth, setSidenavWidth] = useState('0px');
  const [products, setProduct] = useState(productsArray);
  const [filteredData, setFilteredData] = useState(products);
  const [searchResultDisplay, setSearchResultDisplay] = useState('none');
  const [searchValue, setSearchValue] = useState('');
  const { t, i18n } = useTranslation();

  /**addProduct is invoked when new product is added in admin component */
  const addProduct = arg => {
    let product = {
      imgUrl: arg[0],
      title: arg[1],
      category: arg[2],
      price: arg[3],
      date: new Date().toString()
    };
    setProduct([...products, product]);
  };

  /**open left side navbar or close it*/
  const openCloseNav = e => {
    e.stopPropagation();
    if (e.currentTarget.className != 'closebtn') setSidenavWidth('100%');
    else setSidenavWidth('0px');
  };
  /**when we type something in searchBar filter products array and save to filteredData,which is displayed on screen*/
  const handleSearch = e => {
    let value = '',
      result = [];
    if (typeof e.currentTarget == 'object')
      value = e.currentTarget.value.toLowerCase();
    else {
      value = e.toLowerCase();
    }

    setSearchValue(value);

    if (value == '' || typeof e.currentTarget != 'object')
      setSearchResultDisplay('none');
    else setSearchResultDisplay('flex');
    /*replace + (temporarily here and below while searching) with `,coz + breaks search,note that it is not replaced in products or filteredData array,just here for the sake of search funcyion below*/
    value = value.replace(/\+/g, '`');
    result = products.filter(data => {
      return data.title.replace(/\+/g, '`').search(value) != -1;
    });

    setFilteredData(result);
  };

  return (
    <Router>
      <SideNav
        arr={[
          setSidenavWidth,
          activeMenuOption,
          setActiveMenuOption,
          sidenavWidth,
          openCloseNav
        ]}
      />
      <header>
        <div className="headerTop">
          <div id="menuIcon">
            <FaBars onClick={openCloseNav} />
            <span>
              <Wave speed={4} text="Wellcome" effect="fadeOut" />
            </span>
          </div>

          <div id="searchBar">
            <span>
              <input
                onChange={e => handleSearch(e)}
                value={searchValue}
                placeholder="Search product.."
              />
              <FaSearch className="searchIcon" />
            </span>
            <div
              style={{ display: searchResultDisplay }}
              className="searchResult"
            >
              {filteredData.map((value, index) => {
                return (
                  <Link
                    key={index}
                    to="/products"
                    value={searchValue}
                    onClick={() => handleSearch(value.title)}
                  >
                    {value.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div id="admin">
            <Link
              to="/admin"
              onClick={() => {
                setActiveMenuOption(-1);
              }}
            >
              <FaUserAlt />

              <span>{t('admin')}</span>
            </Link>
          </div>
          <LanguageSelector />
        </div>
        <div className="menu">
          <Menu
            arr={[setSidenavWidth, activeMenuOption, setActiveMenuOption]}
          />
        </div>
      </header>

      <Switch>
        <Route path="/admin">
          <Admin
            addProduct={addProduct}
            arr={[
              filteredData,
              setFilteredData,
              'წაშლა',
              products,
              setProduct,
              searchValue
            ]}
          />
        </Route>
        <Route path="/products">
          <Products
            arr={[
              filteredData,
              setFilteredData,
              'ყიდვა',
              products,
              setProduct,
              searchValue
            ]}
          />
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
        <div className="copyright">{t('copyright')}</div>
      </footer>
    </Router>
  );
};
export default App;
