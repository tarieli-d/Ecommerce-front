import React from 'react';
import { useTranslation } from 'react-i18next';
import MySelect from './components/MySelect';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="langSwitch" onChange={changeLanguage}>
      <MySelect options={['en', 'ge']} onClick={() => {}} />
    </div>
  );
};

export default LanguageSelector;
