import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';

const changeSearchValue = (v) => {
  return {
    type: 'CHANGE_SEARCH_VALUE',
    value: v,
  };
};
const SearchBar = (props) => {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.filteredData);
  const { t } = useTranslation();
  const [searchInput, searchResult, setSearchInput, setSearchResult] = [
    ...props.arr,
  ];

  /**regex=>escape special characters */
  const regex_escape = (string) => {
    return string.replace(/\+/g, '\\$&');
  };
  /**when we type something in searchBar filter products array and save to filteredData,which is displayed on screen*/
  const handleSearch = (e) => {
    let value = '',
      result = [],
      temp = [];
    if (typeof e.currentTarget == 'object') value = e.currentTarget.value;
    else {
      value = e;
    }
    setSearchInput(value);

    if (value == '') {
      setSearchResult([]);
      //setSearchValue('');
      dispatch(changeSearchValue(''));
      return;
    }

    /*escape +, coz + breaks search */
    value = regex_escape(value).toLowerCase();
    let r;
    [...filteredData].filter((data) => {
      r = data.title.toLowerCase();
      if (r.search(value) != -1) {
        let a = r.search(value),
          b = data.title;
        if (temp[a] == undefined) {
          temp[a] = [];
        }
        temp[a].push(b);
      }
    });

    let counter = 0;
    temp.map((e) => {
      e.forEach((item) => {
        result[counter++] = item;
      });
    });
    if (result.length == 0) setSearchResult([t('nothing_found')]);
    else setSearchResult(result);
  };

  return (
    <div id="searchBar">
      <span>
        <input
          onChange={(e) => handleSearch(e)}
          value={searchInput}
          placeholder={t('search')}
        />
        <FaSearch
          className="searchIcon"
          onClick={() => {
            //setSearchValue(searchInput), setSearchResult([]);
            dispatch(changeSearchValue(searchInput));
          }}
        />
      </span>
      <div className="searchResult">
        {searchResult.map((value, index) => {
          while (index < 6)
            if (value !== 'Nothing found' || value !== 'არ მოიძებნა')
              return (
                <Link
                  key={index}
                  to="/products"
                  onClick={() => {
                    //setSearchValue(value),
                    dispatch(changeSearchValue(value)),
                      setSearchInput(value),
                      setSearchResult([]);
                  }}
                >
                  {value}
                </Link>
              );
            else
              return (
                <Link to="/products" key={index}>
                  {value}
                </Link>
              );
        })}
      </div>
    </div>
  );
};
export default SearchBar;
