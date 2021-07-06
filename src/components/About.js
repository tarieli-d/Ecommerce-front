import React from 'react';
import '../style.css';
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="common">
      <div className="commonContent">
        {t('about_text')}
      </div>
    </div>
  );
};

export default About;
