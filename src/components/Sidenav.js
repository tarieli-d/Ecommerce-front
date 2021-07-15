import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

import Menu from './Menu.js';
import '../style.css';

const SideNav = props => {
  const { t, i18n } = useTranslation();
  const setSidenavWidth = props.arr[0];
  const styles = {
    height: props.arr[3]
  };

  return (
    <div className="sidenav" style={styles}>
      <a className="closebtn" onClick={props.arr[4]}>
        &times;
      </a>
      {/**This component is used two times with different arguments in header:here and in App component  */}
      <Menu arr={[...props.arr]} />
      <Link
        to="/admin"
        onClick={() => {
          setSidenavWidth(0);
        }}
      >
        {t('admin')}
      </Link>
      <LanguageSelector />
    </div>
  );
};
export default SideNav;
