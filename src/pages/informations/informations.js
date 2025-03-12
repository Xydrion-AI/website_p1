import React from "react";
import { Container, Row } from "react-bootstrap";


function Informations() {
    return (
        <>
            <Container className="text-color-2 informations">
                <Row>
                    <h2 className="mb-5" id="mentions">MENTIONS LEGALES</h2>
                    <h3 className="mb-3">Editeur du site</h3>
                    <p className="mb-5">Nom du site : Via Commu<br/>Type de site : Blog<br/>Responsable de la publication : [Nom ou pseudonyme]<br/>Email de contact : <a href="mailto:contact@viacommu.com.">contact@viacommu.com.</a><br/>Hébergement : [Nom de l'hébergeur] - [Adresse de l'hébergeur]</p>
                </Row>
                <Row>
                    <h3 className="mb-3" id="cgu">Conditions d'utilisation</h3>
                    <p className="mb-5">L'utilisation du site Via Commu implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter régulièrement.</p>
                </Row>
                <Row>
                    <h3 className="mb-3" id="confident">Politique de confidentialité</h3>
                    <p className="mb-5">Via Commu s'engage à protéger la confidentialité des données personnelles des utilisateurs</p>
                </Row>
                <Row>
                    <h3 className="mb-3">Données collectées</h3>
                    <ul className="mb-5">
                        <li className="tabbed">Le formulaire de contact (nom, email, message)</li>
                        <li className="tabbed">L'inscription au site (nom, prénom, email)</li>
                    </ul>
                </Row>
                <Row>
                    <h3 className="mb-3">Finalité des données</h3>
                    <p className="mb-5">Les données collectées sont utilisées uniquement dans le cadre du fonctionnement du site et ne sont pas revendues à des tiers.</p>
                </Row>
                <Row>
                    <h3 className="mb-3" >Droits des utilisateurs</h3>
                    <p className="mb-5">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, contactez-nous à <a href="mailto:contact@viacommu.com.">contact@viacommu.com.</a></p>
                </Row>
            </Container>
        </>
    )
}

export default Informations;