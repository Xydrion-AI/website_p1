import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Container, Row } from 'react-bootstrap';


function NewCarouselEvent({ items }) {
  return (
    <Container>
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
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((items, index) => (
          <Container className='mx-auto text-center my-5'>
            <SwiperSlide key={index} className="text-color-3">
              <img className="carouselItem" src={items.image} alt={items.title || "Impossible d'afficher l'image"} />
              <Row className="d-flex justify-content-center">
                <h3 className="custom-title">{items.articleTitle}</h3>
                <p className='date'>{items.date}</p>
                <p className="custom-description">{items.description}</p>
              </Row>
            </SwiperSlide>
          </Container>
        ))}
      </Swiper>
    </Container>
  );
}

export default NewCarouselEvent;