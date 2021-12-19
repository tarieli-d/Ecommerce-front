import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const PrntStyle = styled.div`
  column-gap: 5rem;
  margin-top: 10rem;
`;
const ChildStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.7rem;
  font-weight: 100;
  width: 30%;
  font-family: cursive;
  color: #2e2e1f;
  font-size: 1.1rem;
`;
const ImgStyle = styled.img`
  height: 15rem;
  width: 15rem;
  box-shadow: 0px 0px 2px 5px #f5f5f5;
`;
const Details = (props) => {
  const id = props.match.params.id;
  const filteredData = useSelector((state) => state.filteredData);
  const product = filteredData.filter((prod) => prod.id == id);
  const divStyle = {};
  return (
    <>
      {/*show specific product details*/}
      {product.map((e, i) => {
        return (
          <PrntStyle key={e.id} className="common-inner-products">
            <ImgStyle src={e.imgUrl} />
            <ChildStyle style={divStyle}>
              <span>
                <b>Title:</b>
                {e.title}
              </span>
              <span>
                <b>Price:</b>
                {e.price}Lari
              </span>
              <span>
                <b>About product:</b>
                {e.info}
              </span>
            </ChildStyle>
          </PrntStyle>
        );
      })}
    </>
  );
};
export default Details;
