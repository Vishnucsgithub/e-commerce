import React from 'react';
import './productItem.css';
import {ShopContext} from '../../context/ShopContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({id , image , name , price}) => {

    const {currency} = useContext(ShopContext);
    console.log(id);
    

  return (
    <>
    <Link to={`/product/${id}`}>
    <div className="card">
        <div className="card-img">
        <img src={image[0]} alt="" />
        </div>
        <p>{name}</p>
        <p>{currency}{price}</p>

        
    </div>
    </Link>
    </>
  )
}

export default ProductItem