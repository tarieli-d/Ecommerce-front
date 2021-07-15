import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { useTranslation } from 'react-i18next';

const Slideri = props => {
  const { t, i18n } = useTranslation();
  // Our States
  const [value, setValue] = useState([0, 99]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    props.rangeSelector(newValue);
  };

  return (
    <>
      <span className="typografy">{t('filtrate')}</span>
      <div
        style={{
          margin: 'auto',
          display: 'block',
          width: '90%',
          padding: '1rem',
          marginTop: '.3rem',
          border: '0.1rem solid rgb(196, 193, 193, 0.5)'
        }}
      >
        <Slider
          style={{}}
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
        />
        <p>
          {value[0]}-დან / {value[1]}-მდე{' '}
        </p>
      </div>
    </>
  );
};

export default Slideri;
