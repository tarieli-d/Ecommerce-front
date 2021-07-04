import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

const Menu = props => {
  console.log(props)
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
export default Menu;
