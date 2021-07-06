import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="langSwitch" onChange={changeLanguage}>
      <div>
        <input id="en" type="radio" value="en" name="language" />
        <label for="en">en</label>
      </div>
      <div>
        <input type="radio" value="ge" name="language" defaultChecked />
        <label>ge</label>
      </div>
    </div>
  );
};

export default LanguageSelector;
