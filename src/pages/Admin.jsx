import React, { useState } from 'react';
import {
  FaLink,
  FaMoneyBillAlt,
  FaRegMinusSquare,
  FaGripVertical,
  FaBuffer,
  FaRegFileAlt,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import MySelect from '../components/main/MySelect.jsx';
import Products from './Products.jsx';
import './Admin.css';
import { useSelector, useDispatch } from 'react-redux';

const addProducti = (v) => {
  return dispatch => {
    return fetch('http://localhost:9000/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(v),
    }).then(res => res.json()
    ).then(res => {
      console.log(res + 1)
      dispatch({ type: 'ADD_PRODUCT', newObject: res })
    }).catch(err => {
      console.log('API failed')
    })
  }
  /*return {
    type: 'ADD_PRODUCT',
    value: v,
  };*/
};

const Admin = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [count, setCount] = useState('');
  const [info, setInfo] = useState('');
  const { t } = useTranslation();

  /**addProduct is invoked when new product is added*/
  const addProduct = (arg) => {
    let product = {
      id: products.length.toString(),
      imgUrl: arg[0],
      title: arg[1],
      category: arg[2],
      price: arg[3],
      oldPrice: 0,
      count: arg[4],
      info: arg[5],
      inCart: false,
      date: new Date().toString(),
    };
    dispatch(addProducti(product));
  };

  const handleChange = (...rest) => {
    if (rest[0] == 'All') rest[0] = 'ყველა';
    if (rest[0] == 'Man') rest[0] = 'კაცი';
    if (rest[0] == 'Woman') rest[0] = 'ქალი';
    if (rest[0] == 'Child') rest[0] = 'ბავშვი';
    if (['ყველა', 'კაცი', 'ქალი', 'ბავშვი'].includes(rest[0])) {
      setCategory(rest[0]);
      return;
    }
    if (rest[0] == 'url') setImgUrl(rest[1]);
    else if (rest[0] == 'title') setTitle(rest[1]);
    else if (rest[0] == 'price') setPrice(rest[1]);
    else if (rest[0] == 'count') setCount(rest[1]);
    else if (rest[0] == 'info') setInfo(rest[1]);
  };

  return (
    <div className="admin">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct([imgUrl, title, category, price, count, info]);
        }}
      >
        <label>{t('add')}</label>

        <div className="addCategory">
          {<FaGripVertical />}
          <span>{t('category')}:</span>{' '}
          <MySelect
            onClick={handleChange}
            options={[t('all'), t('man'), t('woman'), t('child')]}
          />
        </div>
        <div>
          {<FaLink />}
          <input
            className="url"
            onChange={(e) =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={imgUrl}
            placeholder={t('imgUrl')}
          />
        </div>
        <div>
          {<FaRegMinusSquare />}
          <input
            className="title"
            onChange={(e) =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={title}
            placeholder={t('title')}
          />
        </div>
        <div>
          {<FaMoneyBillAlt />}
          <input
            className="price"
            type="number"
            onChange={(e) =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={price}
            placeholder={t('price')}
          />
        </div>
        <div>
          {<FaBuffer />}
          <input
            className="count"
            type="number"
            onChange={(e) =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={count}
            placeholder={t('count')}
          />
        </div>
        <div className="textarea">
          {<FaRegFileAlt />}
          <textarea
            className="info"
            onChange={(e) =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={info}
            placeholder={t('describe')}
          />
        </div>
        <button>{t('add')}</button>
      </form>
      <Products act={'წაშლა'} />
    </div>
  );
};
export default Admin;
