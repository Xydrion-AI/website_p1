import React from "react";
import { Container, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
    return (
        <>  
            <Container  className="contactContainer text-color-2">
                <Form>
                <h1 className="text-color-2 mb-5">Nous contacter</h1>
                    <FormLabel>Entrer votre nom et prénom</FormLabel>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} >
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Nom</InputGroup.Text>
                                <Form.Control aria-label="First name" />
                            </InputGroup>
                        </Col>
                        <Col xs={12} md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Prénom</InputGroup.Text>
                                <Form.Control aria-label="Last name" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Insérer une pièce jointe</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formContact">
                        <Form.Label>Entrer votre adresse email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formContact">
                        <Form.Label>Entrer votre message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Je certifie que les données renseignées sont exactes" />
                    </Form.Group>
                    <Button className="custom-color text-color-2" variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Contact;