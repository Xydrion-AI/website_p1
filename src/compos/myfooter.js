import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Logo = "/assets/images/Logo.png";

function Footer() {
    return (
        <Container fluid id='footer'>
            <Row>
                <h4 className='col-12 footerTitle'>INFORMATIONS GENERALES</h4>
            </Row>
            <Row className='footerContain'>
                <Col className='col-4 footerLink'>
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
                <Col xs={8} md={8} lg={4} >
                    <Row className='footerImageRow'>
                        <img src={Logo} alt="Logo du site" className='footerImage' />
                    </Row>
                    <Row>
                        <p className='copyright'>Copyright © 2025 Tous droits réservés.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;