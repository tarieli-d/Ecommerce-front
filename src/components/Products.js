import React, { useState } from "react";
import "../style.css";

const Products = (props) => {
  return (
    <>
      <div className="main">
        {props.products.map((e, i) => {
          return (
            <div className="product">
              <div className="top">
                <img key={i} src={e.imgUrl} />
              </div>
              <div className="bottom">
                <span key={i}>{e.price} ლარი </span>
                <button>ყიდვა</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
