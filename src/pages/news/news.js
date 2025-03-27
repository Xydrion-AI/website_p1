import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import NewCarouselNews2 from "../../compos/carouselNews2"; 

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')  // Assurez-vous que le chemin est correct
      .then(response => response.json())
      .then(data => setNewsData(data.articles));  // Récupère les articles et les stocke
  }, []);

  return (
    <>
      <Container className="my-5" id="lastNews">
        <h2 className="text-color-2">Dernières news</h2>
        <NewCarouselNews2 categoryKey="lastNews" /> {/* Exemple de filtrage par catégorie */}
      </Container>
      <Container className="my-5" id="informaticNews">
        <h2 className="text-color-2">Développement informatique</h2>
        <NewCarouselNews2 categoryKey="informatique" /> {/* Exemple de filtrage par catégorie */}
      </Container>
      <Container className="my-5" id="technologies">
        <h2 className="text-color-2">Technologies</h2>
        <NewCarouselNews2 categoryKey="technologies" /> {/* Exemple de filtrage par catégorie */}
      </Container>
      {/* Vous pouvez ajouter d'autres sections ici si nécessaire */}
    </>
  );
}

export default News;