import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

//Encore du formulaire, rien de compliqué

function CheckEmail() {
  const [verificationCode, setVerificationCode] = useState('');

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row className="mb-3 text-color-2">
          <h1>Changement mot de passe</h1>
        </Row>
      </Container>

      <Container className="forgot">
        <Row>
          <Col md={12}>
            <Form onSubmit={handleSubmit}>
              <Container className="mb-3 text-color-2">
                <label for="verificationCode" className="form-label">Indiquer l'adresse utiliser l'autre de l'inscription</label>
                <input
                  type="text"
                  className="form-control textBrecupmdp"
                  id="verificationCode"
                  placeholder="Adresse mail"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <Button as={Link} to="/forgot" type="submit" className="custom-button-2 w-50 my-3">Vérifier</Button>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckEmail;
