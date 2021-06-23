import React, { useState } from "react";
import "../style.css";

const Products = () => {
  const [popupWindow, SetPopupWindow] = useState("none");
  const Style = {
    display: popupWindow,
  };
  /*const showWindow = () => {
    SetPopupWindow("flex");
  };*/

  return (
    <>
      <div className="popupWindow" style={Style}>
        <div>Call this number: 555 65 77 08</div>
        <div className="close">x</div>
      </div>
      <div className="main">
        {[...Array(2)].map((e, i) => (
          <>
            <div className="product">
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUC-_2I4_775RSeEIHfXH909ZeQw-7-fzucMuMqrI-O_GeIwZrIJwr9iyTCpTdOsc3_90&usqp=CAU"></img>
              </div>
              <div className="bottom">
                <span>50 ლარი</span>
                <button>ყიდვა </button>
              </div>
            </div>

            <div className="product">
              <div className="top">
                <img src="https://rukminim1.flixcart.com/image/714/857/jn4x47k0/shoe/k/q/s/023-black-6-6-lee-cargo-black-original-imaf9trhyzejgwvd.jpeg?q=50"></img>
              </div>
              <div className="bottom">
                <span>60 ლარი</span>
                <button>ყიდვა</button>
              </div>
            </div>

            <div className="product">
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6yc4bNq8EWnJIw6t3F56c3lo-5SoSH8G5w&usqp=CAU"></img>
              </div>
              <div className="bottom">
                <span>58 ლარი</span>
                <button>ყიდვა</button>
              </div>
            </div>

            <div className="product">
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0C59pa3lhwJ7yZ5dkDbsCWzUwGWK7ueK1w&usqp=CAU"></img>
              </div>
              <div className="bottom">
                <span>45 ლარი</span>
                <button>ყიდვა</button>
              </div>
            </div>

            <div className="product">
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVXT5ywnZj2mosTqrtrm_t7jBSC2ZEeLg4g&usqp=CAU"></img>
              </div>
              <div className="bottom">
                <span>40 ლარი</span>
                <button>ყიდვა</button>
              </div>
            </div>

            <div className="product">
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-oYVY2SG9DJgM9TfpPt_ZuvtW2mUlQGRvg&usqp=CAU"></img>
              </div>
              <div className="bottom">
                <span>39 ლარი </span>
                <button>ყიდვა</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Products;
