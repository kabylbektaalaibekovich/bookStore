import React, { useState } from 'react'; 
import { MdDelete } from "react-icons/md";  
import { useMainContext } from '../../../context/Maincontext';

const BasketCart = ({el}) => {
    const { removeFromBasket, updateQuantity } = useMainContext();
    const [quantity, setQuantity] = useState(el.quantity || 1); 

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(el.id, newQuantity); 
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(el.id, newQuantity); 
        }
    };

    return (
<div className='container'>
<li className="cartItem">

<img className="productImage" src={el.imageURL} alt={el.name} />

<div className="productDetails">
    <h3 className="productName">{el.name}</h3>
    <p className="productDescription">{el.descreption}</p>
    <div className="basket-item-quantity">
        <button className="quantity-btn" onClick={handleDecrease}>-</button>
        <span className="quantity"> {quantity}</span>
        <button className="quantity-btn" onClick={ handleIncrease}>+</button>
    </div>
    <p className="currentPrice">
   ${(el.price * quantity).toFixed(2)}</p>
</div>
<button className="delBtn"  onClick={() => removeFromBasket(el.id)}>
    <MdDelete />
</button> 
</li>
</div>
    );
};

export default BasketCart;
