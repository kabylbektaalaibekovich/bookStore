import React from 'react';
import { useMainContext } from '../../context/Maincontext';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import CountUp from 'react-countup';  
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const HeroCart = ({ el }) => {
  const navi = useNavigate();
  const { addBasket, removeData, addFavorite, favorite  , removeFavorite} = useMainContext();

  const isFavorite = favorite.some((item) => item.id === el.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(el.id);
    } else {
      addFavorite(el); 
    }
  };
  
  return (
    
    <div className="mainBox">
      <div className="box">
        <Link to={`/detal/${el.id}`}>
          <img src={el.imageURL} alt={el.name} className="product-image" />
        </Link>
        <button
          onClick={handleFavoriteClick}
          className="favorite"
          style={{ color: isFavorite ? 'black' : 'inherit' }} 
        >
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />} 
        </button>
        <div className="price">
        <h3 className="product-name">{el.name}</h3>
          <span className="span-price">${' '} <CountUp start={0} end={el.price} duration={2.75} separator=" " /></span>
       
          <button className="basBtn" onClick={() => addBasket(el)}>
            <BsCart3 />
          </button>
          <button className="editBtn" onClick={() => navi(`/edit/${el.id}`)}>
            <FaPencil />
          </button>
          <button className="delBtn" onClick={() => removeData(el.id)}>
            <MdDeleteOutline />
          </button>
          </div>
        </div>
      
      </div>
  );
};

export default HeroCart;
