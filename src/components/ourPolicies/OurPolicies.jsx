import React from 'react'
import './ourPolicies.css'
import { assets } from '../../assets/assets'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

const OurPolicies = () => {
  return (
   <>
   <div className="ourPolicies section">

    <div className="policy-card">
      {/* <img src={assets.exchange_icon} alt="" /> */}
      <TbTruckDelivery />
      <p className='pol-head'>Easy Exchange Policy</p>
      <p className='pol-para'>We Offer hassel exchange offer policy</p>
    </div>
   
    <div className="policy-card">
      {/* <img src={assets.quality_icon} alt="" /> */}
      <GiReturnArrow />
      <p className='pol-head'>7 Days Return Policy</p>
      <p className='pol-para'>We provide 7 days free return policy</p>
    </div>
   
    <div className="policy-card">
      {/* <img src={assets.support_img} alt="" /> */}
      <BiSupport />
      <p className='pol-head'>Best Customer Support</p>
      <p className='pol-para'>We provide 24/7 customer support </p>
    </div>
   

   </div>
   </>
  )
}

export default OurPolicies