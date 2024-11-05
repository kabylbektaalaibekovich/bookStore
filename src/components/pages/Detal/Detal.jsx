import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../../context/Maincontext';
import './Detal.css';

const Detal = () => { 
    const { proId } = useParams();
    const { book, addToBasket } = useMainContext(); 
    const findDetal = book.find((el) => el.id === proId);
    const navigate = useNavigate(); 

    // Состояние для количества, состояния добавления в корзину и отображения полного описания
    const [quantity, setQuantity] = useState(1);
    const [isInBasket, setIsInBasket] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false); // Состояние для контроля отображения полного описания

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToBasket = () => {
        if (!isInBasket) {
            const itemToAdd = {
                ...findDetal,
                quantity,
            };
            addToBasket(itemToAdd);
            setIsInBasket(true);
        } else {
            navigate('/basket'); 
        }
    };

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore); // Переключаем состояние
    };

    if (!findDetal) {
        return <div className='container text-center py-10'>Товар не найден</div>;
    }

    return (
<div className="detal">
<div className='container'>
           <div className="detalCard">
           <div className='detail-wrapper'>
                <img src={findDetal.imageURL} alt={findDetal.name} className="book-image" />
                <div className='detail-content'>
                    <h1 className='book-title'>{findDetal.name}</h1>
                    <p className='book-description'>
                        {isReadMore ? findDetal.description : `${findDetal.description.substring(0, 100)}...`} 
                    </p>
                    <button 
                        onClick={toggleReadMore} 
                        className="read-more-button"
                    >
                        {isReadMore ? '...Скрыть' : 'Читать больше...'}
                    </button>
                    <div className='quantity-control'>
                        <button 
                            onClick={handleDecrease} 
                            className="quantity-button"
                        >
                            -
                        </button>
                        <span className="quantity-display">{quantity}</span>
                        <button 
                            onClick={handleIncrease} 
                            className="quantity-button"
                        >
                            +
                        </button>
                    </div>
                    <div className='price-container'>
                        <span className="price">${(findDetal.price * quantity).toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={handleAddToBasket} 
                        className="add-to-basket-button"
                    >
                        {isInBasket ? 'Перейти в корзину' : 'Добавить в корзину'}
                    </button>
                </div>
            </div>
           </div>
        </div>
</div>
    );
};

export default Detal;
