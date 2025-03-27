import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function Profile() {
    const Avatar = "/assets/images/bg.jpg";

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Container className="text-color-2 mt-5 user">
                    <h2 className="text-center my-5">Profil d'utilisateur</h2>
                    <Col md={12} className='' >
                        <img src={Avatar} alt='User' className='rounded-circle user' />
                        <h3 className="text-center my-5">A propos de vous</h3>
                        <Row className="user text-center">
                            <p >Pseudo: (nom du profil)</p>
                            <p>Adresse mail: (adresse mail du profil)</p>
                            <p className="mb-5">Date création du compte:</p>
                            <Button as={Link} to="/user" type="submit" className="custom-color text-color" >Modification</Button>
                        </Row>
                    </Col>
            </Container>
        </>
    );
}

export default Profile;