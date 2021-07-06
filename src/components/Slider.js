import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
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
    <div
      style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
      }}
    >
      <h3>{t('filtrate')}</h3>
      <Typography id="range-slider" gutterBottom>
        {t('range')}
      </Typography>
      <Slider
        style={{ color: 'red' }}
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      <p>
        {value[0]}-დან / {value[1]}-მდე{' '}
      </p>
    </div>
  );
};

export default Slideri;
