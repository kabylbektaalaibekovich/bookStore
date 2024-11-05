import React from 'react';
import { useMainContext } from '../../../context/Maincontext';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import CountUp from 'react-countup';
import './Favorite.css';
import { BsCart3 } from "react-icons/bs";
import Footer from '../../Footer/Footer';
const Favorite = () => {
  const { favorite, removeFavorite , addBasket , book , } = useMainContext();

  return (
    <div className="favorite-container">
      <h2 className="favorite-title">Избранные товары</h2>
      {favorite.length === 0 ? (
        <p className="empty-message">Ваши избранные товары пусты.</p>
      ) : (
        <div className="favorite-list">
          {favorite.map((item) => (
            <div className="favorite-item" key={item.id}>
              <Link to={`/detail/${item.id}`} className="favorite-link">
                <img src={item.imageURL} alt={item.name} className="favorite-image" />
                <h3 className="favorite-name">{item.name}</h3>
                <div className="favorite-price">
                  <CountUp start={0} end={item.price} duration={2.75} separator=" " />
                </div>
              </Link>
              <button className="remove-favorite" onClick={() => removeFavorite(item.id)}>
                <MdDeleteOutline />
              </button>
            </div>
          ))}
        </div>
      )}

<div className="Mainrecomend">
  <h1 className='MainrecomendH1'>Рекомендуем для вас</h1>
  <div className='recomend'>
  {
  book.slice(3,8).map((el) => (
   <div className='recomendCard'>
   <div className='card'>
   <Link to={`/detal/${el.id}`}>  <img src={el.imageURL} alt="" /></Link> 
   
   <h3 >{el.name}</h3>
   <div className="card-title">
   <span className='span-price'>${' '}
    <CountUp
   start={0}
   end={el.price}
   duration={2.75}
   separator=" "
   > 
   </CountUp>
   </span>
   <button  className='basBtn'onClick={()=>addBasket(el)}><BsCart3 /></button>
   </div>
   </div>
   </div>
  ))}
  </div>
</div>
<Footer/>
    </div>
  );
};

export default Favorite;
