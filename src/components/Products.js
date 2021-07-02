import React, { useState, useEffect } from 'react';
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

const Products = props => {
  const [newPrice, setNewPrice] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [
    filteredData,
    setFilteredData,
    act,
    products,
    setProduct,
    searchValue
  ] = [...props.arr];

  useEffect(() => {
    const newObject = [...products];
    let sortedObj = () => Sort(sortValue);
    setFilteredData(sortedObj);
  }, [products]);

  const removeItem = (imgUrl, action) => {
    const newObject = filteredData.filter(prod => prod.imgUrl != imgUrl);
    if (action == 'წაშლა') setProduct(newObject);
  };

  const priceChanged = title => {
    const newObject = filteredData.filter(prod => prod.imgUrl != activeInput);
    const obj = {
      imgUrl: activeInput,
      price: newPrice,
      title: title,
      date: new Date().toString()
    };
    newObject.unshift(obj);
    setProduct(newObject);
  };

  const Sort = value => {
    let arr = [...products].filter(data => data.title.includes(searchValue));
    setSortValue(value);
    if (value == 'ფასით - დაბლიდან მაღლა')
      arr.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    else if (value == 'ფასით - მაღლიდან დაბლა')
      arr.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    else if (value == 'დასახელების მიხედვით ა-ჰ')
      arr.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    else if (value == 'თარიღით - ახლიდან ძველისკენ')
      arr.sort((a, b) =>
        new Date(a.date).getTime() < new Date(b.date).getTime()
          ? 1
          : new Date(b.date).getTime() < new Date(a.date).getTime()
          ? -1
          : 0
      );
    else if (value == 'თარიღით - ძველიდან ახლისკენ')
      arr.sort((a, b) =>
        new Date(a.date).getTime() > new Date(b.date).getTime()
          ? 1
          : new Date(b.date).getTime() > new Date(a.date).getTime()
          ? -1
          : 0
      );

    setFilteredData(arr);
    return arr;
  };

  return (
    <>
      <div className="main">
        <div className="sort">
          <span>დალაგება: </span>{' '}
          <MySelect
            onClick={Sort}
            options={[
              'ფასით - დაბლიდან მაღლა',
              'ფასით - მაღლიდან დაბლა',
              'დასახელების მიხედვით ა-ჰ',
              'თარიღით - ძველიდან ახლისკენ',
              'თარიღით - ახლიდან ძველისკენ'
            ]}
          />
        </div>
        {filteredData.map((e, i) => {
          return (
            <div
              className={
                act != 'წაშლა' ? 'product animated' : 'product notAnimated'
              }
            >
              <div className="top">
                <img key={i} src={e.imgUrl} />
              </div>
              <div className="bottom">
                <span>{e.title}</span>
                <span>
                  <input
                    className={e.imgUrl}
                    title={e.title}
                    onChange={e => {
                      setNewPrice(e.currentTarget.value);
                      setActiveInput(e.currentTarget.className);
                    }}
                    value={activeInput == e.imgUrl ? newPrice : ''}
                    placeholder={`${e.price} ლარი`}
                  />
                  <button onClick={() => priceChanged(e.title)}>შეცვლა</button>
                </span>
                <button
                  style={
                    props.arr[2] == 'წაშლა'
                      ? { background: 'red' }
                      : { background: 'green' }
                  }
                  onClick={() => removeItem(e.imgUrl, props.arr[2])}
                >
                  {props.arr[2]}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
