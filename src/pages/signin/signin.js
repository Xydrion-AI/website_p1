import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

//Formulaire d'inscription, c'est essentiellement du html qui attend d'être adapté pour être gérer avec une base de donnée

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row className="text-color-2">
          <h1>Se connecter</h1>
        </Row>
        <Row className="text-color-4">
          <h2>Vous tentez d’accéder à un contenu qui nécessite d’être connecté</h2>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6} style={{ margin: '2% auto' }}>
            <form onSubmit={handleSubmit}>
              <Container className="my-3 form-check connexion text-color-2">
                <label for="InputEmail1" className="form-label"></label>
                <input
                  type="email"
                  className="form-control text-color-2"
                  id="InputEmail1"
                  placeholder="Pseudo"
                  aria-describedby="emailHelp"
                  value={email}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Container>
              <Container className="mb-3 form-check connexion text-color-2">
                <label for="InputPassword1" className="form-label"></label>
                <input
                  type="password"
                  className="form-control text-color-2"
                  placeholder="🔒︎ Mot de passe"
                  id="InputPassword1"
                  value={password}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Container>
              <Container className="mb-3 form-check text-color-2">
                <Button as={Link} to="/forgot" type="button" className="forgotPass" >Mot de passe oublié?</Button>
              </Container>
              <Container className="buttonRow">
                <Row className="forgotForm">
                  <Col md={2}>
                    <Button type="submit" className="custom-button-2 text-color-2">Connexion</Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
          <Col md={6} className="text-color-2" style={{ margin: '3% auto' }}>
            <p className="inscrit">Si vous n'avez pas encore de compte, cliquez sur le bouton ci-dessous, c'est gratuit.</p>
            <Button as={Link} to="/register" type="button" className="btn custom-button-2 text-color-2">Inscription</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignIn;