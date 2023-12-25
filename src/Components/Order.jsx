
import '/src/Styles/Order.css';
import wine3 from '/wine3.jpg'
import React, { useState } from 'react';

export default function Order(){
    const [quantity, setQuantity] = useState(1);
    const [isOrderClicked, setIsOrderClicked] = useState(false);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        // Reset state when quantity becomes 0
        setIsOrderClicked(false);
      }
    };
  
    const handleOrderClick = () => {
      setIsOrderClicked(true);
    };

    return(
        <div id="orderSection" className="orderContainer">
            <div className="orderContent">

                <div className="orderImageContainer">
                    <div className="orderImageDiv">
                        <img src={wine3} className="orderImageStyle"/>
                    </div>
                </div>

                <div className="orderBoxContainer">
                    <div className="orderBoxDiv">
                        <div className='orderBoxCard'>

                        <h1>Rosé de Peche Wine</h1>
                        <h2>$25.00 <span>/bottle</span></h2>
                        <h3>
                            Savor the sophistication of Rosé de Pêche—a captivating blend that harmonizes the essence of ripe peaches with delicate florals. 
                            Elevate your moments with each refined sip, 
                            a testament to the artistry in every bottle.
                        </h3>
                        
                                      {/* Conditionally render buttons based on the order state */}
                        {isOrderClicked ? (
                        <div className="quantityButtons">
                        <button onClick={handleDecrement} className='changeBtn'>-</button>
                        <span className='quantityStyle'>{quantity}</span>
                        <button onClick={handleIncrement} className='changeBtn'>+</button>
                        </div>
                        ) : (
                        <button onClick={handleOrderClick} className='orderNowBtn'>Order Now</button>
                        )}

                        {/* Purchase with Card button */}
                        {isOrderClicked && (
                        <button className="purchaseBtn">Purchase with Card</button>
                        )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}