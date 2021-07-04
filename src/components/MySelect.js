import React from 'react';
import '../style.css';

const MySelect = props => {
  return (
    <select
      onClick={e => props.onClick(e.currentTarget.value)}
      className="select"
    >
      {props.options.map((e, i) => {
        return <option value={e}>{e}</option>;
      })}
    </select>
  );
};
export default MySelect;