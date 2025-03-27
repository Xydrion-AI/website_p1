import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import NewCarouselNews2 from "../../compos/carouselNews2"; 

//Cette page est celle qui m'a posé le plus de soucis mais qui était la plus constructive !
// Il ne reste que très peu de chose ici, les données sont dans un json, les composants dans le dossier composant, ça laisse une page clean

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/data/news.json') //Récupération des données dans mon json (remplace mes tableaux d'objets qui prennent beaucoup de place, plus tard, il faudrait stocker les données sur mongodb ou firebase)
      .then(response => response.json())
      .then(data => setNewsData(data.articles));  
  }, []);

  return (
    <>
      <Container className="my-5" id="lastNews">
        <h2 className="text-color-2">Dernières news</h2>
        <NewCarouselNews2 categoryKey="lastNews" /> 
      </Container>
      <Container className="my-5" id="informaticNews">
        <h2 className="text-color-2">Développement informatique</h2>
        <NewCarouselNews2 categoryKey="informatique" /> 
      </Container>
      <Container className="my-5" id="technologies">
        <h2 className="text-color-2">Technologies</h2>
        <NewCarouselNews2 categoryKey="technologies" /> 
      </Container>
      
    </>
  );
}

export default News;