import React from "react";
import { Container, FormLabel, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';

function Register() {
    return (
        <>
            <Container className="register text-color-2 mt-5">
                <Form>
                    <h1 className="text-color-2 my-5">Créer un compte</h1>
                    <FormLabel>Entrer votre nom et prénom</FormLabel>
                    <Row >
                        <Col xs={12} md={6} >
                            <InputGroup className="mb-3 ">
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
                    <Row >
                    <Col xs={12}>
                            <Form.Group className="mb-3 align" controlId="formContact">
                                <Form.Label>Entrer votre adresse email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Entrer votre mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirmer votre mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Confirmer mot de passe" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className="custom-color text-color-2 my-5" variant="primary" type="submit">
                        S'enregistrer
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register;