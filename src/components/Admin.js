import React, { useState } from 'react';
import { FaLink, FaMoneyBillAlt } from 'react-icons/fa';
import Products from './Products';

const Admin = props => {
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');

  const handleChange = e => {
    let val = e.currentTarget.value;
    if (e.currentTarget.className == 'url') setImgUrl(val);
    else if (e.currentTarget.className == 'title') setTitle(val);
    else setPrice(val);
  };
  return (
    <div className="common admin">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addProduct([imgUrl, title, price]);
        }}
      >
        <label>პროდუქტის დამატება</label>
        <div>
          {<FaLink />}
          <input
            className="url"
            onChange={handleChange}
            value={imgUrl}
            placeholder="Image url"
          />
        </div>
        <div>
          {<FaLink />}
          <input
            className="title"
            onChange={handleChange}
            value={title}
            placeholder="Title"
          />
        </div>
        <div>
          {<FaMoneyBillAlt />}
          <input
            className="price"
            onChange={handleChange}
            value={price}
            placeholder="Price"
          />
        </div>
        <button>დამატება</button>
      </form>
      <div id="adminDelText">პროდუქტის წაშლა ან ფასის შეცვლა</div>
      <Products arr={[...props.arr]} />
    </div>
  );
};
export default Admin;
