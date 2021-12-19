import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LangSwitcher = styled.div.attrs(props => ({
  alignSelf: props.from === 'header' ? 'flex-start' : 'center',
  height: props.from === 'header' ? '85%' : '6%',
  marginLeft: props.from === 'header' && 'auto'
}))`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: ${props => props.alignSelf};
  height: ${props => props.height};
  width: 6rem;
  margin-left: ${props => props.marginLeft};
`;

const Lang = styled.span.attrs(props => ({
  color:
    props.id && props.id === props.selectedLang
      ? 'red'
      : props.from && props.from === 'header'
      ? 'black'
      : '#b5b5b5'
}))`
  font-weight: 800;
  font-size: 1.2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: underline;
  cursor: pointer;
  color: ${props => props.color};
`;

const LanguageSelector = ({ from, selectedLang, setSelectedLang }) => {
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <LangSwitcher from={from} onChange={changeLanguage}>
      <Lang
        from={from}
        selectedLang={selectedLang}
        id="ge"
        onClick={() => changeLanguage('ge')}
      >
        geo
      </Lang>
      <Lang from={from}>|</Lang>
      <Lang
        from={from}
        selectedLang={selectedLang}
        id="en"
        onClick={() => changeLanguage('en')}
      >
        eng
      </Lang>
    </LangSwitcher>
  );
};

export default LanguageSelector;
