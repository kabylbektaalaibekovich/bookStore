import React from 'react';
import { useMainContext } from '../../../context/Maincontext';
import BasketCart from './BasketCart';
import { Link, useNavigate } from 'react-router-dom';
import './Basket.css'
import { BsCart3 } from "react-icons/bs";
import CountUp from 'react-countup';
import Footer from '../../Footer/Footer';

const Basket = ({}) => {
    const { basket,  book,addBasket  } = useMainContext();
    const navigate = useNavigate()

 
    
    
    return (
   
<section className='shop'>
<div className="container">
  <div className="shopBox">
      {basket.length > 0 ? (
          basket.map((el, idx) => <BasketCart el={el} key={idx} />)
      ) : (
          
          <div className='emptyBasket'>
 <img className='emptyImg' src="https://cdn-icons-png.flaticon.com/512/3825/3825062.png" alt="" />
 <h1 className='emptyH1'>The cart is empty , <span className='emptySpan'>but this can be fixed!</span></h1>
 <button className='emptyBtn' onClick={() => navigate('/')}>Go to product catalog</button>
          </div>
      )}
  </div>


  <div className="Mainrecomend">
  <h1 className='MainrecomendH1'>Возможно, Вам понравится</h1>
  <div className='recomend'>
  {
  book.slice(5,9).map((el) => (
   <div className='recomendCard'>
   <div className='card'>
   <Link className='product-image' to={`/detal/${el.id}`}><img className='product-image' src={el.imageURL} alt="" /></Link> 
   
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
</div>
<Footer/>
</section>
    );
};

export default Basket;







