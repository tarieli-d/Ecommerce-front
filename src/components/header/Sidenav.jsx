import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector.jsx';
import Menu from './Menu.jsx';
import './Sidenav.css';
import styled from 'styled-components';

const SidenavBar = styled.div`
  height: ${({ sidenavHeight }) => sidenavHeight};
`;

const SideNav = props => {
  const { t } = useTranslation();
  const [
    setSidenavHeight,
    sidenavHeight,
    openCloseNav,
    activeMenuOption,
    setActiveMenuOption,
    selectedLang,
    setSelectedLang
  ] = [...props.arr];
  return (
    <SidenavBar sidenavHeight={sidenavHeight} className="sidenav">
      <a className="closebtn" onClick={openCloseNav}>
        &times;
      </a>
      {/**This component is used two times with different arguments here and in Header component*/}
      <Menu arr={[setSidenavHeight, activeMenuOption, setActiveMenuOption]} />
      <Link
        to="/admin"
        onClick={() => {
          setSidenavHeight(0);
        }}
      >
        {t('admin')}
      </Link>
      <LanguageSelector
        from="sidenav"
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />
    </SidenavBar>
  );
};
export default SideNav;
