import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MySelect from './MySelect';
import Slideri from './Slider';

const Products = props => {
  const { t } = useTranslation();
  const [newPrice, setNewPrice] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [sortValue, setSortValue] = useState('თარიღით - ახლიდან ძველისკენ');
  const [chosenCategory, setChosenCategory] = useState('');
  const [sliderValue, setSliderValue] = useState([0, 99]);
  const [selectedProduct, setSelectedProduct] = useState();

  /**Destructuring props */
  const [
    filteredData,
    setFilteredData,
    act,
    products,
    setProduct,
    searchValue,
    addToCart
  ] = [...props.arr];

  /**when products array is modified in some form:deleted,changed price or added product to,filteredData array should be amended accordingly by invoking Sort function.filteredData array alike products array is displayed on products page,it just keeps all products info and gives them to filteredData when they need to be displayed */
  const firstUpdate = useRef(true);
  useEffect(() => {
    /*if (firstUpdate.current) {
      firstUpdate.current = 'false';
      return;
    }*/
    Sort(sortValue);
  }, [products, searchValue]);

  /**when product delete button is clicked in admin panel invoke this func */
  const removeItem = imgUrl => {
    const newObject = products.filter(prod => prod.imgUrl != imgUrl);
    setProduct(newObject);
  };
  /**when price change button is clicked in admin panel invoke this func */
  const priceChanged = title => {
    const newObject = products.filter(prod => prod.imgUrl != activeInput);
    const obj = {
      imgUrl: activeInput,
      price: newPrice,
      title: title,
      category: chosenCategory,
      date: new Date().toString()
    };
    newObject.unshift(obj);
    setProduct(newObject);
  };

  const SortBy = (...rest) => {
    const [arr, value] = [...rest];
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
    return arr;
  };

  /*gapiltrva sortValue(tarigit,fasit(zrdadobit an klebadobit) searchValue da chosenCategory gatvaliswinebit */
  const Sort = value => {
    let arr = [...products].filter(data => data.title.includes(searchValue));

    if (value == 'Man') value = 'კაცი';
    if (value == 'Woman') value = 'ქალი';
    if (value == 'Child') value = 'ბავშვი';
    if (value == 'Price - from low to high') value = 'ფასით - დაბლიდან მაღლა';
    if (value == 'Price - from high to low') value = 'ფასით - მაღლიდან დაბლა';
    if (value == 'By name A-H') value = 'დასახელების მიხედვით ა-ჰ';
    if (value == 'By date - from old to new')
      value = 'თარიღით - ძველიდან ახლისკენ';
    if (value == 'By Date - From new to old')
      value = 'თარიღით - ახლიდან ძველისკენ';
    if (Array.isArray(value)) {
      setSliderValue(value);
      arr = SortBy(arr, sortValue);
      arr = arr.filter(
        data =>
          data.price >= value[0] &&
          data.price <= value[1] &&
          data.category.includes(chosenCategory)
      );
    } else if (value.length > 10) {
      /**set which sort option is chosen,when useEffect spots changes in products array it calls this function with sortValue,to sort products array and save sorted data to filteredData array with respect to chosenCategory and searchValue*/
      setSortValue(value);
      arr = arr.filter(
        data =>
          data.category.includes(chosenCategory) &&
          data.price >= sliderValue[0] &&
          data.price <= sliderValue[1]
      );
      arr = SortBy(arr, value);
    } else {
      arr = SortBy(arr, sortValue);
      if (value == 'ყველა' || value == 'All') {
        setChosenCategory('');
        arr = arr.filter(
          data => data.price >= sliderValue[0] && data.price <= sliderValue[1]
        );
      } else if (value == 'ბავშვი' || value == 'ქალი' || value == 'კაცი') {
        setChosenCategory(value);
        arr = arr.filter(
          data =>
            data.category == value &&
            data.price >= sliderValue[0] &&
            data.price <= sliderValue[1]
        );
      }
    }
    setFilteredData(arr);
  };

  return (
    <>
      <div className="main">
        <div className="categoried">
          <span>{t('category')}</span>{' '}
          <MySelect
            onClick={Sort}
            options={[t('all'), t('man'), t('woman'), t('child')]}
          />
          <div className="slider">
            <Slideri Sort={Sort} />
          </div>
        </div>
        <div className="products">
          <div className="sort">
            <span>{t('sort')}: </span>{' '}
            <MySelect
              onClick={Sort}
              options={[
                t('by_date_new_to_old'),
                t('by_date_old_to_new'),
                t('price_from_low_to_high'),
                t('price_from_high_to_low'),
                t('by_name')
              ]}
            />
          </div>

          {filteredData.map(e => {
            return (
              <div
                className={
                  act != 'წაშლა' ? 'product notAnimated' : 'product notAnimated'
                }
                key={e.id}
              >
                <div className="top">
                  <Link to={`/details/${e.id}`}>
                    <img src={e.imgUrl} />
                  </Link>
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
                      placeholder={e.price + t('lari')}
                    />
                    <button onClick={() => priceChanged(e.title)}>
                      {t('change')}
                    </button>
                  </span>

                  {act == 'წაშლა' ? (
                    <button
                      style={{ background: 'red' }}
                      onClick={() => removeItem(e.imgUrl)}
                    >
                      {t('del')}
                    </button>
                  ) : (
                    <button
                      style={{ background: 'green' }}
                      onClick={() => {
                        addToCart(e);
                        let prod = [...filteredData];
                        prod.forEach(item => {
                          item.id == e.id ? (item.inCart = true) : item.inCart;
                        });
                        setFilteredData(prod);
                      }}
                    >
                      <ShoppingCartIcon />
                      <b>{e.inCart ? 'In cart' : t('cart')}</b>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Products;
