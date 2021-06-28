import React, { useState } from "react";
import "../style.css";

const Products = (props) => {
  let act=props.arr[2];
  const removeItem = (imgUrl,action) => {
    const newObject = props.arr[0].filter(prod => prod.imgUrl != imgUrl);
    if(action=='წაშლა')
       props.arr[1](newObject);
    
} 
  return (
    <>
      <div className="main">
        {props.arr[0].map((e, i) => {
          return (
            <div className={act!='წაშლა'?'product animated':'product notAnimated'}>
              <div className="top">
                <img key={i} src={e.imgUrl}/>
              </div>
              <div className="bottom">
                <span key={i}>{e.price} ლარი </span>
                <button 
                style={props.arr[2]=='წაშლა'?{background:'red'}:{background:'green'}} onClick={()=>removeItem(e.imgUrl,props.arr[2])}>{props.arr[2]}</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
