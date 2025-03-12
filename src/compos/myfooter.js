import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Logo = "/assets/images/Logo.png";

function Footer() {
    return (
        <Container fluid id='footer'>
            <Row>
                <h4 className='text-center'>INFORMATIONS GENERALES</h4>
            </Row>
            <Row>
                <Container>
                    <Col className='text-align-left'>
                        <Row>
                            <Link as={Link} to="/contact" className='text-color link'>Contact</Link>
                        </Row>
                        <Row>
                            <Link as={Link} to="/informations#mentions" className='text-color link'>Mentions légales</Link>
                        </Row>
                        <Row>
                            <Link as={Link} to="/informations#cgu" className='text-color link'>C.G.U</Link>
                        </Row>
                        <Row>
                            <Link as={Link} to="/informations#confident" className='text-color link'>Politique de confidentialité</Link>
                        </Row>
                    </Col>
                </Container>
            </Row>
            <Row>
                <Container className='copyright'>
                    <img src={Logo} alt="Logo du site" height={50} className='logo' />
                    <p>Copyright © 2025 Tous droits réservés.</p>
                </Container>
            </Row>
        </Container>
    );
}

export default Footer;