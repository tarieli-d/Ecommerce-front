import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './SpecialOffers.css';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Arrow = styled.span`
  display: inline-flex;
  cursor: pointer;
  background: grey;
  color: white;
  margin-right: 5px;
  border-radius: 10%;
  &:hover {
    background: black;
  }
`;
const TitleSybling = styled.div`
  margin-left: auto;
`;

const SpecialOffers = (props) => {
  const { t } = useTranslation();
  const [arrowDirection, setArrowDirection] = useState('');
  const [arrowClicked, setArrowClicked] = useState(0);
  const [specialProducts, setSpecialProducts, handleCart, Carousel] = [
    ...props.arr,
  ];

  const firstUpdate = useRef(false);
  useEffect(() => {
    //runs on arrow click
    if (firstUpdate.current) {
      setSpecialProducts((prev) => {
        let temp = [];
        prev.forEach((item, i) => {
          //copy without reference
          temp[i] = { ...item };
        });
        if (arrowDirection === 'left') {
          let last = temp.pop();
          temp.unshift(last);
        } else {
          temp.push(temp[0]);
          temp.splice(0, 1);
        }
        //add first element to back and delete it from very front,this way discounted products move from left to right-carousel effect
        return temp;
      });
    }
    firstUpdate.current = true;
    //runs every 3sec to make caruesel effect even if user doesn't click arrow
    let time = setInterval(() => {
      Carousel();
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, [arrowClicked]);

  return (
    <div className="special-offers">
      <div className="spec-offers-title">
        <TitleSybling>{t('special_offers')}</TitleSybling>
        <TitleSybling>
          <Arrow>
            <FaAngleLeft
              onClick={() => {
                setArrowDirection('left');
                setArrowClicked((prev) => prev + 1);
              }}
            />
          </Arrow>
          <Arrow>
            <FaAngleRight
              onClick={() => {
                setArrowDirection('right');
                setArrowClicked((prev) => prev + 1);
              }}
            />
          </Arrow>
        </TitleSybling>
      </div>
      <div className="imgSlider">
        {specialProducts && specialProducts.map((e) => {
          if (e != undefined)
            return (
              <div className="product" key={e.id}>
                <div className="sale">Sale</div>
                <div className="top">
                  <Link to={`/details/${e.id}`}>
                    <img src={e.imgUrl} />
                  </Link>
                </div>
                <div className="bottom">
                  <span>{e.title}</span>
                  <div>
                    <span>{e.price + 'Gel'}</span>
                    <span>{e.oldPrice == 0 ? '' : `${e.oldPrice}Gel`}</span>
                    <button onClick={() => handleCart(e)}>
                      <ShoppingCartIcon />
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default SpecialOffers;
