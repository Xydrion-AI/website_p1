import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewCarouselNews2({ categoryKey }) {
  const [items, setItems] = useState([]);

  // Charger les articles depuis le fichier JSON
  useEffect(() => {
    fetch('data/news.json')
      .then((response) => response.json())
      .then((data) => {
        // Si un filtre est spécifié, appliquer le filtre
        const filteredItems = categoryKey 
          ? data.articles.filter(item => item.category === categoryKey)
          : data.articles;
        setItems(filteredItems);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des articles:', error);
      });
  }, [categoryKey]); // Le tableau de dépendances inclut categoryKey pour mettre à jour quand il change

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
            <Container as={Link} to={item.link} className="mx-auto text-center text-color">
              <img className="carouselItem" src={item.imageURI} alt={item.title || "Image non disponible"} />
              <Row className="d-flex justify-content-center">
                <h3 className="custom-title">
                  <Link className='text-color-2' to={item.link}>
                    {item.articleTitle}
                  </Link>
                </h3>
                <p className="custom-description">{item.description}</p>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default NewCarouselNews2;