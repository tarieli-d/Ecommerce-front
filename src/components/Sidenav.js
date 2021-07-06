import React from 'react';
import Menu from './Menu.js';
import '../style.css';
import { Link } from 'react-router-dom';

const SideNav = props => {
  const setSidenavWidth = props.arr[0];
  const styles = {
    height: props.arr[3]
  };

  return (
    <div className="sidenav" style={styles}>
      <div id="logo" />
      <a className="closebtn" onClick={props.arr[4]}>
        <div id="closeIcon">&times;</div>
      </a>
      {/**This component is used two times with different arguments in header:here and in App component  */}
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
export default SideNav;
