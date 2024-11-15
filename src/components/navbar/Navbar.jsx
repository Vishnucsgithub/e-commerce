import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { links } from '../../assets/assets'
import {FaFacebookF,FaLinkedinIn,FaBars, FaUser , FaShoppingBag} from 'react-icons/fa'
import { GoSearch } from "react-icons/go";

import{MdClose} from 'react-icons/md'
import { useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo'>
          <img src={assets.logo1} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
           links.map(({name,path}, index) => {
              return(
                <li>
                  <NavLink to={path} >{name}</NavLink>
                </li>
              )
            })
          }
       </ul>
       <ul className='social__links'>
       <li><GoSearch onClick={()=> setShowSearch(true)} /></li>
       <li><FaUser /></li>
       <li><Link className='my-cart' to={'/cart'}><FaShoppingBag  /> <p>{getCartCount()}</p></Link> </li>
       </ul>
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ?  <MdClose /> : <FaBars />
          }
         
        </button>
      </div>
    </nav>
  )
}

export default Navbar
