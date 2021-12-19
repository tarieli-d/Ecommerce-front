import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommonPagesContainer } from '../common/css_in_js/CommonStyle.js';
import styled from 'styled-components';

const Contacts = styled(CommonPagesContainer)`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const ContactField = styled.p`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  word-wrap: break-word;
`;
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="common-outer">
        <Contacts>
          <ContactField>
            <i className="fa fa-map-marker" />
            <span>
              {t('contact_address1')} {t('contact_address2')}
            </span>
          </ContactField>

          <ContactField>
            <i className="fa fa-phone" />
            <span>+995 574 51 35 20</span>
          </ContactField>

          <ContactField>
            <i className="fa fa-envelope" />
            <span>t_duishvili@cu.edu.ge</span>
          </ContactField>
        </Contacts>
      </div>
    </>
  );
};
export default Contact;
