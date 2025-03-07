import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Logo = "/assets/images/Logo.png";
const Avatar = "/assets/images/avatar.svg";
let Pseudo = "Pseudo";

function Banner() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid id="banniere">
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo du site" width={160} height={160} className='d-inline-block align-top' /></Navbar.Brand>
        <Navbar.Toggle className="custom-toggle" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="pt-0 me-auto my-2 my-lg-0" style={{ maxHeight: '160px' }} navbarScroll>
            <NavDropdown title="Accueil" id="basic-nav-dropdown" className='custom-dropdown'>
              <NavDropdown.Item href="#action/3.1" id="basic-nav-dropdown-item">Qui sommes-nous ?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="basic-nav-dropdown-item">A propos de la formation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="basic-nav-dropdown-item">Nous contacter</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News" id="basic-nav-dropdown" className='custom-dropdown'>
              <NavDropdown.Item href="#action/3.4" id="basic-nav-dropdown-item">Dernières news</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" id="basic-nav-dropdown-item">Développement informatique</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" id="basic-nav-dropdown-item">Technologies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Forums" id="basic-nav-dropdown" className='custom-dropdown'>
              <NavDropdown.Item href="#action/3.7" id="basic-nav-dropdown-item">Discussions générales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8" id="basic-nav-dropdown-item">Veille technologique</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9" id="basic-nav-dropdown-item">Programmation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" id="basic-nav-dropdown-item">Événements</Nav.Link>
          </Nav>
          <Form className="d-flex my-2">
            <Form.Control type="search" placeholder="Recherche..." className="me-2" aria-label="Search" />
            <Button className="custom-color">Lancer</Button>
          </Form>
          <NavDropdown className='custom-dropdown-left custom-dropdown '
            title={
              <div className='userContainer'>
                <img src={Avatar} alt='User' width={60} height={60} className='rounded-circle item-center' style={{ marginRight: '25px', maxWidth: '120px' }} />
                <div className='userCard'>Pseudonyme</div>
              </div>
            }
            id='user-dropdown'
          >
            <NavDropdown.Item id="basic-nav-dropdown-item" href='/profile'>Mon profil</NavDropdown.Item>
            <NavDropdown.Item id="basic-nav-dropdown-item" href='/logout'>Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;