// import React, { useContext, useEffect, useState } from 'react'
// import './cart.css'
// import { ShopContext } from '../../context/ShopContext'
// import Heading from '../../components/heading/Heading';
// import { assets } from '../../assets/assets';
// import { RiDeleteBin6Line } from "react-icons/ri";


// const Cart = () => {

//   const {products , currency , cartItems, updateQuantity} = useContext(ShopContext);

//   const [cartData , setCartData] = useState([]);

//   useEffect(()=>{
//     const tempData = [];

//     for(const items in cartItems){
//     for(const item in cartItems[items]){
//       if(cartItems[items][item] > 0){
//         tempData.push({
//           _id: items,
//           size:item,
//           quantity:cartItems[items][item]
//         })
//       }
//     }
//     }

//    setCartData(tempData);
    
//   },[cartItems])


//   return (
//     <>

//     <div className="cart-page section">
//     <Heading text1={"Your"} text2={"Cart"} />

//     <div className="cart-container">
//       <div className="cart-sub">
//         {
//           cartData.map((item , index)=>{

//             const productData = products.find((product)=> product._id === item._id)

//             return(
//               <div key={index} className="cart-items">
                
//                 <img className='image-cart' src={productData.image[0]} alt="" />
//                 <p>{productData.name}</p>

//                 <div className="cart-price">
//                 <p>{currency}{productData.price}</p>
//                 <p>{item.size}</p>
//                 </div>

//                 <div className="inputs">
//                 <input onChange={(e)=> e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id , item.size , Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} />
//                 </div>

//                 <div className="cart-bin">
//                <RiDeleteBin6Line onClick={()=> updateQuantity(item._id, item.size , 0)} />
//                 </div>

               



//               </div>
//             )

//           })
//         }
//       </div>
//     </div>
//     </div>
   


//     </>
//   )
// }

// export default Cart


// Cart.jsx
import React, { useContext, useEffect, useState } from 'react';
import './cart.css';
import { ShopContext } from '../../context/ShopContext';
import Heading from '../../components/heading/Heading';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('UPI');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  useEffect(() => {
    const tempData = [];
    let total = 0;

    Object.entries(cartItems).forEach(([productId, sizes]) => {
      Object.entries(sizes).forEach(([size, quantity]) => {
        if (quantity > 0) {
          const product = products.find((product) => product._id === productId);
          if (product) {
            const price = product.price * quantity;
            total += price;
            tempData.push({
              _id: productId,
              size,
              quantity,
              price,
              name: product.name,
              image: product.image[0],
            });
          }
        }
      });
    });

    setCartData(tempData);
    setTotalAmount(total);
  }, [cartItems, products]);

  const handlePayment = () => {
    alert(`Payment Successful via ${selectedPayment}`);
  };

  return (
    <div className="cart-page section">
      <Heading text1="Your" text2="Cart" />
      <div className="cart-container">
        <div className="cart-sub">
          {cartData.map((item, index) => (
            <div key={index} className="cart-items">
              <img className="image-cart" src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <div className="cart-price">
                <p>{currency}{(item.price / item.quantity).toFixed(2)}</p>
                <p>Size: {item.size}</p>
              </div>
              <div className="inputs">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, item.size, Number(e.target.value) || 1)
                  }
                />
              </div>
              <div className="cart-bin">
                <RiDeleteBin6Line onClick={() => updateQuantity(item._id, item.size, 0)} />
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: {currency}{totalAmount.toFixed(2)}</h3>
          <button 
            className="toggle-payment-btn" 
            onClick={() => setShowPaymentOptions(!showPaymentOptions)}
          >
            {showPaymentOptions ? 'Hide Payment Options' : 'Show Payment Options'} 
            {showPaymentOptions ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>

          {showPaymentOptions && (
            <div className="payment-options">
              <h4>Select Payment Method:</h4>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={selectedPayment === 'UPI'}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Credit/Debit Card"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Net Banking"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Net Banking
              </label>
            </div>
          )}

          <button onClick={handlePayment} className="pay-now-button">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


