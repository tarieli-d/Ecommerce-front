import React, { useState } from 'react';
import {
  FaLink,
  FaMoneyBillAlt,
  FaRegFileAlt,
  FaGripVertical
} from 'react-icons/fa';
import Products from './Products';
import MySelect from './MySelect';

const Admin = props => {
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (...rest) => {
    if (['ყველა', 'კაცი', 'ქალი', 'ბავშვი'].includes(rest[0]) == true) {
      setCategory(rest[0]);
      return;
    }
    if (rest[0] == 'url') setImgUrl(rest[1]);
    else if (rest[0] == 'title') setTitle(rest[1]);
    else if (rest[0] == 'price') setPrice(rest[1]);
  };
  return (
    <div className="common admin">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addProduct([imgUrl, title, category, price]);
        }}
      >
        <label>პროდუქტის დამატება</label>

        <div className="addCategory">
          {<FaGripVertical />}
          <span>კატეგორია:</span>{' '}
          <MySelect
            onClick={handleChange}
            options={['ყველა', 'კაცი', 'ქალი', 'ბავშვი']}
          />
        </div>
        <div>
          {<FaLink />}
          <input
            className="url"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={imgUrl}
            placeholder="Image url"
          />
        </div>
        <div>
          {<FaRegFileAlt />}
          <input
            className="title"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={title}
            placeholder="Title"
          />
        </div>
        <div>
          {<FaMoneyBillAlt />}
          <input
            className="price"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
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
