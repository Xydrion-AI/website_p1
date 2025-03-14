import React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link } from 'react-router-hash-link';

/*Après avoir importé les éléments nécessaires à notre navbar, on débute la configuration

Cette barre de navigation en est à sa 3ème versions car c'est un copier coller d'une barre de navigation React-bootstrap que j'ai adapté à mon besoin et optimisé avec 
ce que l'on a appris en cours notamment avec les tableaux d'objets dans lesquels ont ajoute nos données. Elle a évoluée en même temps que mon expérience. J'ai fais ces choix pour plusieurs raisons :
 1- Je trouve le code bien plus lisible de cette manière
 2- Il m'est plus facile de modifier mes données et d'envisager d'améliorer le code par la suite en ajoutant facilement de nouveaux éléments
 3- Je pratique ce qui a été appris en cours concernant les navbar

Rentrons dans le vif du sujet, on défini nos variables en premier dans notre fonction. Ici, la portée nécessaire est propre à notre fonction.
Ensuite, je défini mes tableaux d'objets dans lesquels on retrouvera :
- l'identification de la page
- le "titre" du menu dropdown, 
- Son tableau d'items (représentant les sections du menu avec leur titre et la redirection via HashLink)
Plus tard, je déplacerais peut-être le contact ailleurs car ce n'est pas une section mais bien une autre page mais tout n'est pas encore parfaitement défini et tout les redirections sont fonctionnelles*/

function Banner() {
  const Logo = "/assets/images/Logo.png";
  const Avatar = "/assets/images/avatar.svg";
  let Pseudo = "Pseudonyme";
  const newDropdown = [
    {
      id: 'home',
      label: 'Accueil',
      items: [
        { label: 'Qui sommes-nous ?', link: '/#aboutUs' },
        { label: 'A propos de la formation', link: '/#about' },
        { label: 'Événements', link: '/#events' }
      ],
      link: '/'
    },
    {
      id: 'news',
      label: 'News',
      items: [
        { label: 'Dernières news', link: "/news#lastNews" },
        { label: 'Développement informatique', link: "/news#informaticNews" },
        { label: 'Technologies', link: "/news#technologies" }
      ],
      link: '/news'
    },


  ];
  {/*On passe à la navbar en elle même que l'on choisi de mettre dans un container fluid afin qu'elle prenne toute longueur de page.
      Cette navbar est responsive et s'adapte très bien à la version bureau, je l'ai choisie car elle contient plusieurs éléments différents qu'il était intéressant de configurer.
      J'y ai simplement ajouté le dropdown utilisateur et j'ai supprimé un bouton navigation qui renvoyait à l'accueil car je souhaitais le retour à l'accueil en cliquant sur le logo du site
      J'ajouterais que la plus grande majorité des modifications d'images, de données etc se font en dehors de ce qui se trouve ci-dessous*/}
  return (
    <Navbar expand="lg" className="nav text-color">
      <Container fluid id="banniere">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo du site" className='logoHeader' />{/*Notre fameux logo qui renvoie vers l'accueil quand on clique dessus */}
        </Navbar.Brand>
        <Navbar.Toggle className="custom-toggle" aria-controls="navbarScroll" /> {/*Bouton hamburger pour la version mobile */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            {/*Les fonctions ci dessous permettent de reformater les objets de mes tableaux en fonction de ce que j'ai défini dans ma constante newDropdown */}
            {newDropdown.map(({ id, label, items }) => (
              <NavDropdown key={id} title={label} id="basic-nav-dropdown-item" className='custom-dropdown'>
                {items.map((item, index) => (
                  <NavDropdown.Item key={index} as={Link} to={item.link} id="basic-nav-dropdown-item">
                    {item.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
            {/* Création d'un lien de navigation "direct"*/}
            <Nav.Link as={Link} to="/contact" id="basic-nav-dropdown-item">Nous contacter</Nav.Link>
          </Nav>
          {/* Création du dropdown utilisateur*/}
          <NavDropdown
            className='custom-dropdown-left custom-dropdown'
            title={
              <Container className='userContainer'>
                <img src={Avatar} alt='User' className='rounded-circle item-center userImage' />
                <Row className='userCard'>{Pseudo}</Row>
              </Container>
            }
            id='user-dropdown'
          >
            {/* Création du menu utilisateur et des liens*/}
            <NavDropdown.Item as={Link} to='/profile' id="basic-nav-dropdown-item">Mon profil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/logout' id="basic-nav-dropdown-item">Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;