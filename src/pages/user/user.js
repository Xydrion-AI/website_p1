import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function User() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Avatar = "/assets/images/bg.jpg";

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
                <Container className=" text-color-2 mt-5 ">
                    <Row>
                    <h2 className="text-center my-5">Modification des informations personnelles</h2>
                        <Col md={4} className='mx-5'>
                            <img src={Avatar} alt='User' className='rounded-circle user' />
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 align" controlId="formContact">
                                <Form.Label>Nouveau pseudo</Form.Label>
                                <Form.Control type="email" placeholder="Pseudo" />
                            </Form.Group>
                            <Form.Group className="mb-3 align" controlId="formContact">
                                <Form.Label>Nouveau mot de passe</Form.Label>
                                <Form.Control type="email" placeholder="Mot de passe" />
                            </Form.Group>
                            <Form.Group className="mb-3 align" controlId="formContact">
                                <Form.Label>Confirmer mot de passe</Form.Label>
                                <Form.Control type="email" placeholder="Mot de passe" />
                            </Form.Group>
                            <Button as={Link} to="/user" type="submit" className="custom-color text-color">Enregistrement</Button>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default User;