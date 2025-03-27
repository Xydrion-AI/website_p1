import React from "react";
import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <>
            <Container>
                <h1 className="text-color-2">Page non disponible</h1>
                <img src="/assets/images/404ERROR.webp" alt="Impossible d'afficher la page - Erreur 404" />
            </Container>
        </>
    );
}

export default NotFound;