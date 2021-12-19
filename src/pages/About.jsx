import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommonPagesContainer } from '../common/css_in_js/CommonStyle.js';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="common-outer">
      <CommonPagesContainer>{t('about_text')}</CommonPagesContainer>
    </div>
  );
};

export default About;

/**
  const addToCart = e => {
    const arr = new Set(cartData);
    if ([...arr].length == 0) {
      setCartData(prev => new Set(prev).add(e));
    }
    let in_cart = [...arr].map(prod => {
      if (prod.id == e.id) return 1;
    });
    if (in_cart != 1) setCartData(prev => new Set(prev).add(e));
  };
 */
