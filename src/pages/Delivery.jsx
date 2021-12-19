import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommonPagesContainer } from '../common/css_in_js/CommonStyle.js';


const Delivery = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="common-outer">
      <CommonPagesContainer>{t('delivery_text')}</CommonPagesContainer>
    </div>
  );
};
export default Delivery;
