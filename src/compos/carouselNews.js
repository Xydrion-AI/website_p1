import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Row } from 'react-bootstrap';


function NewCarouselNews({ items }) {
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
         {items.map((item, index) => (
          <SwiperSlide key={index} className="text-color-3">
            <Container className="mx-auto text-center">
              <img className="carouselItem" src={item.image} alt={item.title || "Image non disponible"} />
              <Row className="d-flex justify-content-center">
                <h3 className="custom-title">{item.articleTitle}</h3>
                <p className='date'>{item.date}</p>
                <p className="custom-description">{item.description}</p>
              </Row>
            </Container>
          </SwiperSlide>
        ))
        }
      </Swiper >
    </Container >
  );
}

export default NewCarouselNews;