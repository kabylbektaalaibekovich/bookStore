import React, { useEffect, useState } from 'react';
import './Hero.css'
import { useMainContext } from '../../context/Maincontext';

import { Link, useNavigate } from 'react-router-dom';
import HeroCart from './HeroCart';


const Hero = ({el}) => {
const {book , category , setCategory, readBook, basket , setBasket } = useMainContext()
const filterBooks = category ? book.filter((el) => el.category === category) : book

useEffect(()=> {
    readBook()
},[])





    return (
        <div id='hero'>
            <div className="container">
                <div className="hero">  
<h1>Категории</h1>


<div className="image">

<div onClick={() => setCategory('')} className='img'>
    <img src="https://www.cambourne.info/wp-content/uploads/2019/03/Cambourne-Book-Club.jpg" alt="" />
    <h3>Все книги</h3>
</div>
<div onClick={() => setCategory('Психология')} className="img-0">
        <img src="https://goal-life.com/img/main/page/kniga/po-psihologii/review/labkovskiy.jpg" alt="" />
        <h3>Психология</h3>
    </div>

    <div onClick={() => setCategory("Детектив")} className="img1">
        <img src="https://www.moscowbooks.ru/image/book/749/orig/i749078.jpg?cu=20220418143509" alt="" />
        <h3>Детектив</h3>
    </div>
    <div onClick={() => setCategory("Фантастика")}  className="img2">
        <img src="https://cdn.pixabay.com/photo/2017/08/27/23/59/marvel-2688068_1280.jpg" alt="" />
        <h3>Фантастика</h3> 
    </div>
    <div onClick={() => setCategory('Приключения')} className="img3">
        <img src="https://img3.labirint.ru/rc/8d36aae14ecc92e5ecd24a01a3d10f86/363x561q80/books74/738479/cover.jpg?1582007142" alt="" />
        <h3>Приключения</h3>
    </div>
    <div onClick={() => setCategory('Научная')} className="img4">


        <img src="https://img4.labirint.ru/rc/d28712781940257675bc1d165b1edca9/363x561q80/books31/308850/cover.jpg?1322569663" alt="" />
        <h3>Научная</h3>
    </div>
    <div  onClick={() => setCategory('Разработчик')} className="dev">
    <img src="https://askerweb.by/wp-content/uploads/2021/09/oblozhka-4.png" alt="" />
    <h3>Книги для программистов</h3>
  </div>
    <div onClick={() => setCategory('Мотивация')} className="img5">
        <img src="https://cv6.litres.ru/pub/c/cover_415/2873865.jpg" alt="" />
        <h3>Мотивация</h3>
    </div>
    <div className="book">

                </div>
</div>
</div>
 </div>
<div className="book">
{
    filterBooks.map((el) => (
   <HeroCart el={el} key={el} />
))}
</div>
 </div>
    );
};

export default Hero;