import { Col, Container, Row } from 'react-bootstrap';
const Logo = "/assets/images/Logo.png";

function Footer() {
    return (
        <Container fluid id='footer'>
            <Row>
                <div className='text-align-center'>INFORMATIONS GENERALES</div>
            </Row>
            <Row>
                <Container>
                    <Col className='text-align-left'>
                        <div className='text-color'>Contact</div>
                        <div className='text-color'>L'équipe</div>
                        <div className='text-color'>Informations légales</div>
                        <div className='text-color'>C.G.U</div>
                        <div className='text-color'>C.G.V</div>
                        <div className='text-color'>Modération</div>
                        <div className='text-color'>Politique de confidentialité</div>
                    </Col>
                </Container>
            </Row>
            <Row>
                <div className='copyright'>
                    <img src={Logo} alt="Logo du site" height={50} className='logo' />
                    <div>Copyright © 2025 Tous droits réservés.</div>
                </div>
            </Row>
        </Container>
    );
}

export default Footer;