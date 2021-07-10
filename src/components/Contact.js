import React from 'react';
import '../style.css';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="common">
        <div className="commonContent contact">
          <div className="icons">
            <i className="fa fa-map-marker" />
            <p>
              <span>{t('contact_address1')}</span> {t('contact_address2')}
            </p>
          </div>

          <div className="icons">
            <i className="fa fa-phone" />
            <p>+995 574 51 35 20</p>
          </div>

          <div className="icons">
            <i className="fa fa-envelope" />
            <p>t_duishvili@cu.edu.ge</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
