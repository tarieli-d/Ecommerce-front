import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const SliderBar = styled.div`
  margin: auto;
  display: block;
  width: 90%;
  padding: 0.5rem;
  margintop: 0.3rem;
  border: 0.1rem solid rgb(196, 193, 193, 0.5);
`;

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0'
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px'
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  track: {
    height: 3
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const Slideri = props => {
  const { t } = useTranslation();
  // Our States
  const [Value, setValue] = useState([0, 99]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    props.Sort(newValue);
  };

  return (
    <div className="slider">
      <span className="typografy">{t('filtrate')}</span>
      <SliderBar>
        <AirbnbSlider
          value={Value}
          onChange={rangeSelector}
          ThumbComponent={AirbnbThumbComponent}
        />
        <p>
          <input
            onChange={e => {
              setValue([e.currentTarget.value, Value[1]]);
            }}
            value={Value[0]}
          />
          <input
            onChange={e => {
              setValue([Value[0], e.currentTarget.value]);
            }}
            value={Value[1]}
          />{' '}
        </p>
      </SliderBar>
    </div>
  );
};

export default Slideri;
