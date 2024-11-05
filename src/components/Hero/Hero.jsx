import React, { useEffect } from 'react';
import './Hero.css';
import { useMainContext } from '../../context/Maincontext';
import Marquee from 'react-fast-marquee';
import HeroCart from './HeroCart';
import LowerSection from '../LowerSection/LowerSection';
const Hero = () => {
const { book, category, setCategory, readBook } = useMainContext();
const filterBooks = category ? book.filter((el) => el.category === category) : book;
useEffect(() => {
readBook();
}, []);

return (
<div id='hero' className="hero-container">
<div className="container">
<div className="hero">
<h1 className='hero-title'>Категории</h1>

<Marquee  className="marquee-items" speed={150}>
<div className="marquee-items">
<div onClick={() => setCategory('')} className="card">
<a href="#">
<img className="card-image" src="https://static.lsm.lv/media/2022/07/large/4/iivt.jpg" alt="Все книги" />
 </a>
<div className="card-content">
<h5 className="card-title">Все книги</h5>
            </div>
 </div>
<div onClick={() => setCategory('Психология')} className="card">
            <a href="#">
                <img className="card-image" src="https://lh5.googleusercontent.com/proxy/9-NHOVDCSGzc13rAky1_061sI8rkEVFtXr5V_yLR0l2fyAt3AxGu9tZq3cpAW4_nOjwmsgWZkzSVI84FQ7kNvmhEX5ef0q4wZ5Z7DXLLs_PM1CXdRpY9YEVR61sFKvLTtOjWNnXhhO6NGzxUanO0AlU" alt="Психология" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Психология</h5>
            </div>
</div>
<div onClick={() => setCategory('Детектив')} className="card">
            <a href="#">
                <img className="card-image" src="https://penfox.ru/wp-content/uploads/2019/04/Idei-dlya-detektiva.png" alt="Детектив" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Детектив</h5>
            </div>
</div>
<div onClick={() => setCategory('Фантастика')} className="card">
            <a href="#">
                <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaN4cOm6Xp5WH6t3xdzyxb6D-YLFxkctxaA&s" alt="Фантастика" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Фантастика</h5>
            </div>
</div>
<div onClick={() => setCategory('Приключения')} className="card">
            <a href="#">
                <img className="card-image" src="https://i.ytimg.com/vi/b0Fwjmbs4KA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGh4uygo4IgMED0zzdNW2JITqFMQ" alt="Приключения" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Приключения</h5>
            </div>
</div>
<div onClick={() => setCategory('Научная')} className="card">
            <a href="#">
                <img className="card-image" src="https://prof-ras.ru/media/k2/items/cache/2e83d7bc595a142d5b8cc7504455fc0e_XL.jpg" alt="Научная" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Научная</h5>
            </div>
</div>
<div onClick={() => setCategory('Мотивация')} className="card">
            <a href="#">
                <img className="card-image" src="https://i.ytimg.com/vi/8E9uIDbNsh0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA4Yrq3mYWQ-wR_IUOl43Ib-r5edQ" alt="Научная" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Мотивация</h5>
            </div>
</div>
<div onClick={() => setCategory('Программирование')} className="card">
            <a href="#">
                <img className="card-image" src="https://cdn2.hexlet.io/derivations/image/fill_png/1200/565/eyJpZCI6IjBlMTFjMGU4YmZmNGQ2MDNiODU2ZGFjZDRlYzc2YjYzLnBuZyIsInN0b3JhZ2UiOiJ5YV9zdG9yZSJ9?signature=ee4e4b592c3c53934835b831006fb1f3c16c64a485889abec54096303b476bfa" alt="Научная" />
            </a>
            <div className="card-content">
                <h5 className="card-title">Программирование</h5>
            </div>
</div>
</div>
</Marquee>
<div className="book-list">
 {filterBooks.map((el) => (
<HeroCart el={el} key={el.id} />
))}
</div>
</div>
</div>
<LowerSection/>
</div>
    );
};

export default Hero;
