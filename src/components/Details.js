import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import constants from './constants';

const Details = props => {
  const id = props.match.params.id - 1;

  const prntStyle = {
    columnGap: '5rem'
  };
  const imgStyle = {
    height: '15rem',
    width: '15rem',
    boxShadow: '0px 0px 2px 5px #f5f5f5'
  };
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    gap: '0.7rem',
    fontWeight: '100',
    width: '30%',
    fontFamily: 'cursive',
    color: '#2e2e1f',
    fontSize: '1.1rem'
  };
  return (
    <div style={prntStyle} className="main">
      <img style={imgStyle} src={constants[id].imgUrl} />
      <div style={divStyle}>
        <span>
          <b>Title:</b>
          {constants[id].title}
        </span>
        <span>
          <b>Price:</b>
          {constants[id].price}Lari
        </span>
        <span>
          <b>About product:</b>
          {constants[id].info}
        </span>
      </div>
    </div>
  );
};
export default Details;
