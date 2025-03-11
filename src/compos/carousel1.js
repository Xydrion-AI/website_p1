import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';


function NewCarousel({ items }) {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation= {true}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay, Zoom]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((items, index) => (
          <SwiperSlide key={index} className="text-color">
            <img className="carouselItem" src={items.image} alt={items.title || "Impossible d'afficher l'image"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewCarousel;