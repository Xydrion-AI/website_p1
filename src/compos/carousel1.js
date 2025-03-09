import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
let image = "/assets/images/img1.jpg"

function NewCarousel(){
    return (
       <div>
            <Swiper
      spaceBetween={20}
      slidesPerView={3}
    >
      <SwiperSlide className="text-color"><img className="carouselItem" src={image} alt="Impossible d'afficher l'image"/></SwiperSlide>
      <SwiperSlide className="text-color"><img className="carouselItem" src={image} alt="Impossible d'afficher l'image"/></SwiperSlide>
      <SwiperSlide className="text-color"><img className="carouselItem" src={image} alt="Impossible d'afficher l'image"/></SwiperSlide>
      <SwiperSlide className="text-color"><img className="carouselItem" src={image} alt="Impossible d'afficher l'image"/></SwiperSlide>
    </Swiper>
       </div>
    );
}

export default NewCarousel;