import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Linki = styled(Link)`
  background: ${props =>
    props.$activeMenuOption === props.$index
      ? 'rgb(12, 136, 185)'
      : 'transparent'};
  color: ${props =>
    props.$activeMenuOption === props.$index ? 'white' : 'black'};
`;

const Menu = props => {
  const { t } = useTranslation();
  const [setSidenavHeight, activeMenuOption, setActiveMenuOption] = [
    ...props.arr
  ];
  return (
    <>
      <Linki
        to="/"
        $activeMenuOption={activeMenuOption}
        $index="0"
        onClick={() => {
          {
            setActiveMenuOption('0');
          }
          {
            setSidenavHeight(0);
          }
        }}
      >
        {t('home')}
      </Linki>
      <Linki
        to="/products"
        $activeMenuOption={activeMenuOption}
        $index="1"
        onClick={() => {
          {
            setActiveMenuOption('1');
          }
          {
            setSidenavHeight(0);
          }
        }}
      >
        {t('products')}
      </Linki>
      <Linki
        to="/delivery"
        $activeMenuOption={activeMenuOption}
        $index="2"
        onClick={() => {
          {
            setActiveMenuOption('2');
          }
          {
            setSidenavHeight(0);
          }
        }}
      >
        {t('delivery')}
      </Linki>
      <Linki
        to="/about"
        $activeMenuOption={activeMenuOption}
        $index="3"
        onClick={() => {
          {
            setActiveMenuOption('3');
          }
          {
            setSidenavHeight(0);
          }
        }}
      >
        {t('about')}
      </Linki>
      <Linki
        to="/contact"
        $activeMenuOption={activeMenuOption}
        $index="4"
        onClick={() => {
          setActiveMenuOption('4');
          setSidenavHeight(0);
        }}
      >
        {t('contact')}
      </Linki>
    </>
  );
};
export default Menu;
