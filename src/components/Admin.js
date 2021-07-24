import React, { useState } from 'react';
import {
  FaLink,
  FaMoneyBillAlt,
  FaRegFileAlt,
  FaGripVertical
} from 'react-icons/fa';
import Products from './Products';
import MySelect from './MySelect';
import { useTranslation } from 'react-i18next';

const Admin = props => {
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [count, setCount] = useState('');
  const [info, setInfo] = useState('');
  const { t } = useTranslation();

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
    <div className="common admin">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addProduct([imgUrl, title, category, price, count, info]);
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
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={imgUrl}
            placeholder={t('imgUrl')}
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
            placeholder={t('title')}
          />
        </div>
        <div>
          {<FaMoneyBillAlt />}
          <input
            className="price"
            type="number"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={price}
            placeholder={t('price')}
          />
        </div>
        <div>
          {<FaMoneyBillAlt />}
          <input
            className="count"
            type="number"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={count}
            placeholder={t('price')}
          />
        </div>
        <div className="textarea">
          {<FaMoneyBillAlt />}
          <textarea
            className="info"
            onChange={e =>
              handleChange(e.currentTarget.className, e.currentTarget.value)
            }
            value={info}
            placeholder={t('price')}
          />
        </div>
        <button>{t('add')}</button>
      </form>
      <div id="adminDelText">{t('remove_changeLable')}</div>
      <Products arr={[...props.arr]} />
    </div>
  );
};
export default Admin;
