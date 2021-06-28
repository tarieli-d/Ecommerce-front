import React, { useState } from "react";
import "../style.css";

const Products = (props) => {
  const [newPrice,setNewPrice]=useState('');
  const [activeInput,setActiveInput]=useState('');
  let act=props.arr[2];
  const removeItem = (imgUrl,action) => {
    const newObject = props.arr[0].filter(prod => prod.imgUrl != imgUrl);
    if(action=='წაშლა')
       props.arr[1](newObject);
     
} 
const priceChanged= (e) => { 
  setNewPrice(e.currentTarget.value);
  setActiveInput(e.currentTarget.className)
  const index = props.arr[0].findIndex(prod => prod.imgUrl == e.currentTarget.className);
  const newObject = props.arr[0].filter(prod => prod.imgUrl != e.currentTarget.className);
  const newItem = props.arr[0].filter(prod => prod.imgUrl == e.currentTarget.className);
 // newItem[0].price=e.currentTarget.value;
  const obj = {'imgUrl':e.currentTarget.className, 'price':e.currentTarget.value};
  //newObject.unshift(obj);
  newObject.splice(index, 0, obj);
  props.arr[1](newObject);
  console.log(newObject)
  //props.arr[0][index].price=e.currentTarget.value;
  
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
                <span> 
                  <input className={e.imgUrl} onChange={(e)=>{
                  setNewPrice(e.currentTarget.value);
  setActiveInput(e.currentTarget.className)
}} value={activeInput==e.imgUrl?newPrice:''} placeholder={`${e.price} ლარი`}
  />
  <button onClick={()=>(e)=>priceChanged(e)}>შეცვლა</button> 
  </span>
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
