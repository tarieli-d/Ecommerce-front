import React from 'react';
import '../style.css';
import { useTranslation } from 'react-i18next';

const Delivery = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="common">
      <div className="commonContent">{t('delivery_text')}</div>
    </div>
  );
};
export default Delivery;
