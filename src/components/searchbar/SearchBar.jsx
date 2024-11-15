import React, { useContext, useEffect, useState } from 'react';
import './searchBar.css';
import {ShopContext} from '../../context/ShopContext';
import { assets } from '../../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);

    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection') && showSearch){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [location])



  return showSearch && visible ?  (
  <>
  <div className="section">
  <div className="search-bar ">
    <div className="input-search">
        <input type="text" value={search} placeholder='Search...' onChange={(e)=> setSearch(e.target.value)} />
        <img src={assets.search_icon} alt="" />
    </div>
     <img onClick={()=> setShowSearch(false)} src={assets.cross_icon} alt="" />
  </div>
  </div>
  </>
  ) : null;
}

export default SearchBar