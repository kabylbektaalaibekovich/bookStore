import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './LowerSection.css';
import Footer from '../Footer/Footer';

const books = [
    {
        img: "https://content.img-gorod.ru/page-files/5fc/ff9/0192e70ad22e7044a6515c8dfaff95fc.png",
        title: "Книги о самых разных ведьмах",
    },
    {
        img: "https://content.img-gorod.ru/page-files/85d/08e/0192e7097d8a7765bfac14710108e85d.png",
        title: "Книги Билл Гейтс",
    },
    {
        img: "https://content.img-gorod.ru/page-files/933/a36/0192b86df1ca7eb1829fd3c579a36933.png",
        title: "Любовь , страсть и мафия.",
    },
    {
        img: "https://content.img-gorod.ru/page-files/cb8/937/0192b8653e1376acaa45306761937cb8.png",
        title: "Это тоже любовь к себе...",
    },

    {
        img: "https://content.img-gorod.ru/page-files/082/cb9/0192c2e63bb776308f15d1cdcccb9082.png",
        title: "Настольные игры если ты один.",
    },
    {
        img: "https://content.img-gorod.ru/page-files/059/dbe/0192c2e7139e7f8bbb8d767a26dbe059.png",
        title: "Книги о стиле .",
    },
    {
        img: "https://content.img-gorod.ru/page-files/86e/2a1/0192edc5516876679514bfd7fa2a186e.png",
        title: "Как гласят легенды...",
    },
];

const LowerSection = () => {
    return (
        <section className='swiperSection'>
            <div className='container'>
                <div className="bgPopular">
                    <h1 className='textPopular'>В тренде: 10 самых популярных книг июля 2024</h1>
                </div>
                <div className="slider-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 1, // Один слайд на меньших экранах
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {books.map((book, index) => (
                            <SwiperSlide key={index}>
                                <div className="swip1">
                                    <img className='swipImg1' src={book.img} alt={`slide ${index + 1}`} />
                                    <p>{book.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default LowerSection;
