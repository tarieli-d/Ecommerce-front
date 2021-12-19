import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MySelect from '../components/main/MySelect.jsx';
import SpecialOffers from '../components/main/SpecialOffers';
import Slideri from '../components/main/Slider.jsx';
import './Product.css';
import PopupWindow from '../components/PopupWindow.jsx';
import { useSelector, useDispatch } from 'react-redux';

const delProducti = (v) => {
  return dispatch => {
    return fetch('http://localhost:9000/products/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ id: v }),
    }).then(res => res.json()
    ).then(res => {
      //console.log(res + 1)
      dispatch({ type: 'DELETE_PRODUCT', newObject: res })
    }).catch(err => {
      console.log('API failed')
    })
  }
  /*return {
    type: 'DELETE_PRODUCT',
    id: v,
  };*/
};
const getProducti = (url) => {
  return dispatch => {
    return fetch(url).then(res => res.json()
    ).then(res => {
      console.log(res)
      dispatch({
        type: 'GET_PRODUCTS',
        products: res
      })
    }).catch(err => {
      console.log('API failed')
    })
  }
};
const changeProducti = (v) => {
  return dispatch => {
    return fetch('http://localhost:9000/products/change', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(v),
    }).then(res => res.json()
    ).then(res => {
      console.log(res)
      dispatch({ type: 'CHANGE_PRODUCT', newObject: res })
    }).catch(err => {
      console.log('API failed')
    })
  }
};
const changeFilteredData = (v) => {
  return {
    type: 'CHANGE_FILTERED_DATA',
    newObject: v,
  };
};
const addToCarti = (v) => {
  return {
    type: 'ADD_TO_CART',
    newItem: v,
  };
};
const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filteredData = useSelector((state) => state.filteredData);
  const searchValue = useSelector((state) => state.searchValue);
  const { t } = useTranslation();
  const [newPrice, setNewPrice] = useState(0);
  const [activeInput, setActiveInput] = useState('');
  const [sortValue, setSortValue] = useState('თარიღით - ახლიდან ძველისკენ');
  const [chosenCategory, setChosenCategory] = useState('');
  const [sliderValue, setSliderValue] = useState([0, 99]);
  const [specialProducts, setSpecialProducts] = useState([]);


  const Carousel = (props) => {
    setSpecialProducts((prev) => {
      let temp = [];
      if (props === undefined)
        prev.forEach((item, i) => {
          //if item price is discounted
          //console.log(prev)
          if (item.oldPrice !== 0)
            //copy without reference
            temp.push({ ...item });
        });
      else
        props.forEach((item, i) => {
          if (item.oldPrice !== 0) {
            temp.push({ ...item })
            console.log(temp)
          };
        });
      //if(typeof prev==undefined)return
      //add first element to back and delete it from very front,this way discounted products move from left to right-Carousel effect
      temp.push(temp[0]);
      temp.splice(0, 1);
      //console.log(temp+1)
      return temp;
    });
  };
  useEffect(() => {
    dispatch(getProducti('http://localhost:9000/products'));
  }, []);

  /**when products array is modified in some form:deleted,changed price or added product to,filteredData array should be amended accordingly by invoking Sort function.filteredData array alike products array is displayed on products page,productsarray just keeps all products info*/
  useEffect(() => {
    //Sort function sorts products array and updates filteredData(displayed products) with sorted products
    Sort(sortValue);
    //call Carousel to update discounted products array with products array on it's every change
    console.log('before')
    Carousel(products);
    console.log('after')
  }, [products]);

  useEffect(() => {
    Sort(sortValue);
  }, [searchValue]);

  /**when price change button is clicked in admin panel invoke this func */
  const priceChanged = (e) => {
    //const newObject = products.filter((prod) => prod.id !== activeInput);
    const obj = {
      id: e.id,
      imgUrl: e.imgUrl,
      price: newPrice,
      oldPrice: e.price,
      title: e.title,
      info: e.info,
      count: e.count,
      category: e.category,
      inCart: e.inCart,
      date: new Date().toString(),
    };
    //newObject.unshift(obj);
    dispatch(changeProducti(obj));
  };
  /*called several times in Sort function below,it filters and returns back given array with respect to given sortValue*/
  const SortBy = (...rest) => {
    const [arr, value] = [...rest];
    if (value === 'ფასით - დაბლიდან მაღლა')
      arr.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    else if (value === 'ფასით - მაღლიდან დაბლა')
      arr.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    else if (value === 'დასახელების მიხედვით ა-ჰ')
      arr.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    else if (value === 'თარიღით - ახლიდან ძველისკენ')
      arr.sort((a, b) =>
        new Date(a.date).getTime() < new Date(b.date).getTime()
          ? 1
          : new Date(b.date).getTime() < new Date(a.date).getTime()
            ? -1
            : 0
      );
    else if (value === 'თარიღით - ძველიდან ახლისკენ')
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
  const Sort = (value) => {
    let arr = [...products].filter((data) => data.title.includes(searchValue));
    if (value === 'Man') value = 'კაცი';
    if (value === 'Woman') value = 'ქალი';
    if (value === 'Child') value = 'ბავშვი';
    if (value === 'Price - from low to high') value = 'ფასით - დაბლიდან მაღლა';
    if (value === 'Price - from high to low') value = 'ფასით - მაღლიდან დაბლა';
    if (value === 'By name A-H') value = 'დასახელების მიხედვით ა-ჰ';
    if (value === 'By date - from old to new')
      value = 'თარიღით - ძველიდან ახლისკენ';
    if (value === 'By Date - From new to old')
      value = 'თარიღით - ახლიდან ძველისკენ';
    /**below in if-else clauses we define from where the Sort func was invoked by the value sent as argument and if value is array-consisting of 2 elements,first is min price and second max price on price range slider,thus Sort is called from Slider and we rearange products shown on screen */
    if (Array.isArray(value)) {
      setSliderValue(value);
      /**SortBy is called several times below,it filters and returns back given array with respect to given sortValue*/
      arr = SortBy(arr, sortValue);
      arr = arr.filter(
        (data) =>
          data.price >= value[0] &&
          data.price <= value[1] &&
          data.category.includes(chosenCategory)
      );
    } else if (value.length > 10) {
      /**set which sort option is chosen,when useEffect spots changes in products array it calls this function to sort products array with respect to chosenCategory and searchValue and save sorted data to filteredData array*/
      setSortValue(value);
      arr = arr.filter(
        (data) =>
          data.category.includes(chosenCategory) &&
          data.price >= sliderValue[0] &&
          data.price <= sliderValue[1]
      );
      arr = SortBy(arr, value);
    } else {
      arr = SortBy(arr, sortValue);
      if (value === 'ყველა' || value === 'All') {
        setChosenCategory('');
        arr = arr.filter(
          (data) => data.price >= sliderValue[0] && data.price <= sliderValue[1]
        );
      } else if (value === 'ბავშვი' || value === 'ქალი' || value === 'კაცი') {
        setChosenCategory(value);
        arr = arr.filter(
          (data) =>
            data.category === value &&
            data.price >= sliderValue[0] &&
            data.price <= sliderValue[1]
        );
      }
    }
    //update filteredData with Sorted products
    dispatch(changeFilteredData(arr));
  };
  const handleCart = (e) => {
    dispatch(addToCarti(e));
    let prod = [...filteredData];
    prod.forEach((item) => {
      item.id === e.id ? (item.inCart = true) : item.inCart;
    });
    dispatch(changeFilteredData(prod));
  };

  return (
    <div className="common-outer">
      <SpecialOffers
        arr={[specialProducts, setSpecialProducts, handleCart, Carousel]}
      />
      <div id="adminDelText">{t('remove_changeLable')}</div>
      <div className="common-inner-products">
        <div className="categoried">
          <span>{t('category')}</span>{' '}
          <MySelect
            onClick={Sort}
            options={[t('all'), t('man'), t('woman'), t('child')]}
          />
          <Slideri Sort={Sort} />
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
                t('by_name'),
              ]}
            />
          </div>
          {filteredData.map((e, i) => {
            return (
              <div
                className={
                  props.act !== 'წაშლა'
                    ? 'product notAnimated'
                    : 'product notAnimated'
                }
                key={props.act === 'წაშლა' ? e.id : e.id + 1000}
              >
                <div className="top">
                  <Link to={`/details/${e.id}`}>
                    <img src={e.imgUrl} />
                  </Link>
                </div>
                <div className="bottom">
                  <span>{e.title}</span>
                  <span>
                    <i>{e.oldPrice === '' ? '' : `${e.oldPrice}ლარი`}</i>
                    <input
                      title={e.title}
                      onChange={(event) => {
                        setNewPrice(parseInt(event.currentTarget.value));
                        setActiveInput(e.id);
                      }}
                      type={props.act === 'წაშლა' ? 'number' : 'text'}
                      value={activeInput === e.id ? newPrice : ''}
                      placeholder={e.price + t('lari')}
                    />
                    <button onClick={() => priceChanged(e)}>
                      {t('change')}
                    </button>
                  </span>

                  {props.act === 'წაშლა' ? (
                    <button
                      style={{ backgroundColor: 'red' }}
                      onClick={() => dispatch(delProducti(e.id))}
                    >
                      {t('del')}
                    </button>
                  ) : (
                    <button onClick={() => handleCart(e)}>
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
    </div>
  );
};
export default Products;
