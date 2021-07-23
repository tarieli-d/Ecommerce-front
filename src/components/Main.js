import React from 'react';
import { Wave } from 'react-animated-text';

const Main = () => {
  return (
    <div className="common" style={{fontSize:'6rem'}}>
      
      <Wave  speed={4} text="Wellcome" effect="fadeOut" />
    </div>
  );
};
export default Main;
