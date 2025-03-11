import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Logo = "/assets/images/Logo.png";
const Avatar = "/assets/images/avatar.svg";
let Pseudo = "Pseudonyme";

function Banner() {
  const newDropdown = [
    { id: 'home', label: 'Accueil', items: ['Qui sommes-nous ?', 'A propos de la formation', 'Nous contacter'], link: '/' },
    { id: 'news', label: 'News', items: ['Dernières news', 'Développement informatique', 'Technologies'], link: '/news' },
    { id: 'forums', label: 'Forums', items: ['Discussions générales', 'Veille technologique', 'Programmation'], link: '/forums' },
  ];

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid id="banniere">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo du site" width={160} height={160} className='d-inline-block align-top' />
        </Navbar.Brand>
        <Navbar.Toggle className="custom-toggle" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="pt-0 me-auto my-2 my-lg-0" style={{ maxHeight: '160px' }} navbarScroll>
            {newDropdown.map(({ id, label, items, link }) => (
              <NavDropdown key={id} title={label} id="basic-nav-dropdown-item" className='custom-dropdown'>
                {items && items.map((item, index) => (
                  <NavDropdown.Item key={index} as={Link} to={link} id="basic-nav-dropdown-item">
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
            <Nav.Link as={Link} to="/events" id="basic-nav-dropdown-item">Événements</Nav.Link>
          </Nav>
          <Form className="d-flex my-2">
            <Form.Control type="search" placeholder="Recherche..." className="me-2" aria-label="Search" />
            <Button className="custom-color">Lancer</Button>
          </Form>
          <NavDropdown
            className='custom-dropdown-left custom-dropdown'
            title={
              <div className='userContainer'>
                <img src={Avatar} alt='User' width={60} height={60} className='rounded-circle item-center' style={{ marginRight: '25px', maxWidth: '120px' }} />
                <div className='userCard'>{Pseudo}</div>
              </div>
            }
            id='user-dropdown'
          >
            <NavDropdown.Item as={Link} to='/profile' id="basic-nav-dropdown-item">Mon profil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/logout' id="basic-nav-dropdown-item">Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;
