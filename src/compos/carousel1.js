import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Container } from 'react-bootstrap';

// Carousel pour mes images, rien de bien compliqué à comprendre, je ne vais pas épiloguer sur les composants qu'on trouve partout sur internet. 
// Il sera évident que j'ai compris mon code avec les modifications que j'aurais apporté
function NewCarousel({ items }) {
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay, Zoom]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((items, index) => (
          <Container className='mx-auto text-center my-5'>
            <SwiperSlide key={index} className="text-color">
            <img className="carouselItem" src={items.image} alt={items.title || "Impossible d'afficher l'image"} />
          </SwiperSlide>
          </Container>
        ))}
      </Swiper>
    </Container>
  );
}

export default NewCarousel;