import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';


function NewCarouselSection({ items }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((items, index) => (
          <SwiperSlide key={index} className="text-color mb-5">
            <img className="carouselItemSection" src={items.image} alt={items.title} />
            <div className="d-flex justify-content-center">
              <Button className="custom-button">Entrer dans cette section</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewCarouselSection;