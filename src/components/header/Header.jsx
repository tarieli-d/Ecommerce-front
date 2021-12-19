import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserAlt } from 'react-icons/fa';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useTranslation } from 'react-i18next';
import SideNav from './Sidenav.jsx';
import SearchBar from './SearchBar.jsx';
import Menu from './Menu.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';

const popupWindowShowi = () => {
  return {
    type: 'FLEX',
    display: 'flex',
  };
};
const Header = (props) => {
  const cartData = useSelector((state) => state.cartData);
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeMenuOption, setActiveMenuOption] = useState('10');
  const [sidenavHeight, setSidenavHeight] = useState('0');
  const [selectedLang, setSelectedLang] = useState('ge');
  const itemCountInCart = [...cartData].length;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /**open left side navbar or close it*/
  const openCloseNav = (e) => {
    e.stopPropagation();
    if (e.currentTarget.className != 'closebtn') setSidenavHeight('100%');
    else setSidenavHeight('0');
  };

  return (
    <header>
      <SideNav
        arr={[
          setSidenavHeight,
          sidenavHeight,
          openCloseNav,
          activeMenuOption,
          setActiveMenuOption,
          selectedLang,
          setSelectedLang,
        ]}
      />
      <div className="headerTop">
        <div id="menuIcon">
          <FaBars onClick={openCloseNav} />
          <img src="https://i.ibb.co/TB7TZmw/logo.jpg" />
        </div>

        <SearchBar
          arr={[searchInput, searchResult, setSearchInput, setSearchResult]}
        />
        <LanguageSelector
          from="header"
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
        <div className="shopping-cart_admin-icon">
          <Badge
            onClick={() => dispatch(popupWindowShowi())}
            color="secondary"
            badgeContent={itemCountInCart}
            showZero
          >
            <ShoppingCartIcon />{' '}
          </Badge>{' '}
          <Link
            id="admin-icon"
            to="/admin"
            onClick={() => {
              setActiveMenuOption(-1);
            }}
          >
            <FaUserAlt />
          </Link>
        </div>
      </div>

      <div className="headerBottom">
        <div className="menu">
          <Menu
            arr={[setSidenavHeight, activeMenuOption, setActiveMenuOption]}
          />
        </div>
        <SearchBar
          arr={[searchInput, searchResult, setSearchInput, setSearchResult]}
        />
      </div>
    </header>
  );
};

export default Header;
