import React from 'react';
import './Section.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from '../Hero/Hero';
import { useMainContext } from '../../context/Maincontext';
const Section = () => {
    return (
<div id='section'>
<div className="conntainer">
<div className="section">
<>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}give
        className="mySwiper"
      >
        <SwiperSlide><img src='https://media.istockphoto.com/id/1316920207/vector/promo-sale-banner-with-books-decorative-house-potted-plant-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=vvnWzueY8MKNW9lW36NoLItSq0D1QzOnVyEsi6-JGqk=' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://media.istockphoto.com/id/1600278077/vector/banner-design-with-cat-sitting-with-blanket-and-teacup.jpg?s=2048x2048&w=is&k=20&c=NBdTUSmAth54DCk4NAjyaswlT_7b8ecU8Bcqlg72yPc=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://media.istockphoto.com/id/1492792958/vector/banner-design-with-push-toys-teddy-bear-plush-bunnies.jpg?s=1024x1024&w=is&k=20&c=bVnS5VqyYLevZAg3ALlRzlge6-062kZqiqgE2taoVIU=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://media.istockphoto.com/id/1316920204/vector/promo-sale-banner-with-stack-of-books-glasses-blanket-candle-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=URGh5YFwObwFt15egLZLbcknnh4cEqMp4CFg33AAuO0=" alt="" /></SwiperSlide>
      
      </Swiper>
    </>
</div>
            </div>
   <Hero />
  

        </div>
    );
};

export default Section;