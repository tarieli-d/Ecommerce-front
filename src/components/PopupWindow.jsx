import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PopupWindow.css';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const changeFilteredData = (v) => {
  return {
    type: 'CHANGE_FILTERED_DATA',
    newObject: v,
  };
};
const deleteFromCart = (v) => {
  return {
    type: 'DELETE_FROM_CART',
    item: v,
  };
};
const popupWindowHide = () => {
  return {
    type: 'HIDE',
    display: 'none',
  };
};
const PopupWindowContainer = styled.div`
  display: ${(props) => props.$popupWindowShow};
  position: fixed;
  top: calc(50% - 100px);
  max-width: 800px;
  min-width: 350px;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: 900;
  min-height: 100px;
  background: rgb(255, 255, 255);
  z-index: 11;
  padding: 1rem;
  box-sizing: border-box;
  overflow: scroll;
  pointer-events: none;
`;

const PopupWindow = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filteredData = useSelector((state) => state.filteredData);
  const cartData = useSelector((state) => state.cartData);
  const popupWindowShow = useSelector((state) => state.popupWindowShow);
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  useEffect(() => {
    let arr = [];
    //initialize quantity array with zeros,soon we will replace zeros with the quantity for each product user added to cart
    products.map((e, i) => {
      arr[i] = 0;
    });
    setQuantity(arr);
  }, [products]);

  const removeFromCart = (item, index) => {
    let q = [...quantity];
    setCartTotalPrice((prev) => {
      let t = prev - q[index] * item.price;
      q.splice(index, 1);
      q.push(0);
      return t;
    });
    setQuantity(q);
    dispatch(deleteFromCart(item));
  };

  return (
    <PopupWindowContainer
      className="popupWindow"
      $popupWindowShow={popupWindowShow}
    >
      <div onClick={() => dispatch(popupWindowHide())} className="close">
        <span>
          {t('total_price')}
          {cartTotalPrice}
          {t('lari')}
        </span>
        <Link to="contact">{t('order')}</Link>
        <span>&times;</span>
      </div>
      {[...cartData].map((e, i) => {
        return (
          <div className="cartItem" key={i}>
            <img src={e.imgUrl} />
            <span className="cart-product-title">
              {e.title}({e.price}
              {t('lari')})
            </span>
            <span className="quantity">
              <span
                onClick={() => {
                  let q = [...quantity];
                  if (q[i] < e.count) {
                    q[i] += 1;
                    setQuantity(q);
                    setCartTotalPrice((prev) => Number(prev) + Number(e.price))
                  }
                }}
              >
                +
              </span>
              <span>{quantity[i]}</span>
              <span
                onClick={() => {
                  let q = [...quantity];
                  if (q[i] > 0) {
                    q[i] -= 1;
                    setQuantity(q);
                    setCartTotalPrice((prev) => Number(prev) - Number(e.price));
                  }
                }}
              >
                -
              </span>
            </span>
            <span
              className="del"
              onClick={() => {
                removeFromCart(e, i);
                let prod = [...filteredData];
                prod.forEach((item) => {
                  item.id == e.id ? (item.inCart = false) : item.inCart;
                });
                //setFilteredData(prod);
                dispatch(changeFilteredData(prod));
              }}
            >
              &times;
            </span>
          </div>
        );
      })}
    </PopupWindowContainer>
  );
};

export default PopupWindow;
