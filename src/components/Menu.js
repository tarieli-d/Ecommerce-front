import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import '../style.css';

const Menu = props => {
  const { t, i18n } = useTranslation()
  let setSidenavWidth = props.arr[0],
    activeMenuOption = props.arr[1],
    setActiveMenuOption = props.arr[2];
  const Border = 'border-bottom';
  const Style = {
    /*'borderBottom': '3px solid rgb(35, 167, 75)'*/
    background: 'rgb(12, 136, 185)',
    color: 'white'
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
        <div className="options">{t('home')}</div>
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
        <div className="options">{t('products')}</div>
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
        <div className="options">{t('delivery')}</div>
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
        <div className="options">{t('about')}</div>
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
        <div className="options">{t('contact')}</div>
      </Link>
    </>
  );
};
export default Menu;
