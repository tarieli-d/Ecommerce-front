import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = props => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="copyright">{t('copyright')}</div>
    </footer>
  );
};
export default Footer;
