import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

function News({ user }) {
    const defaultUser = {
        name: "Anonyme",
        image: "/assets/images/avatar.svg",
        status: "Connecté",
        role: "Visiteur"
    };

    const currentUser = user || defaultUser;

    const [comments, setComments] = useState([
        { id: 1, name: "Jean", image: "/assets/images/avatar.svg", text: "Ceci est un faux commentaire", date: "14/03/2025 13:37:34" },
        { id: 2, name: "Marie", image: "/assets/images/avatar.svg", text: "Et celui ci aussi est un faux commentaire", date: "14/03/2025 13:37:32" },
    ]);

    const [newComment, setNewComment] = useState("");
    const [visibleCount, setVisibleCount] = useState(5); // Nombre de commentaires visibles

    // Ajouter un commentaire
    const addComment = () => {
        if (newComment.trim() !== "") {
            const newEntry = {
                id: Date.now(), // Un identifiant unique pour chaque commentaire
                name: currentUser.name,
                image: currentUser.image,
                date: new Date().toLocaleString(),
                text: newComment,
            };
            setComments([newEntry, ...comments]);
            setNewComment("");
        }
    };

    // Gestion de la touche "Entrée"
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Empêche l'événement par défaut (soumission du formulaire)
            addComment();
        }
    };

    // Fonction pour afficher plus de commentaires
    const showMoreComments = () => {
        setVisibleCount(visibleCount + 5);
    };

    // Fonction pour réduire le nombre de commentaires visibles
    const reduceComments = () => {
        setVisibleCount(5);
    };

    // Supprimer un commentaire
    const deleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id);
        setComments(filteredComments);
    };

    return (
        <Container className="newsContainer text-color-2 my-4">
            <header className="text-center mb-4">
                <Image
                    className="imageArticle my-4"
                    src="/assets/images/img1.jpg"
                    alt="Image de l'article"
                    fluid
                    rounded
                />
                <h2 className="newsContainer mt-4">Article sur des lunettes posées sur un ordinateur portable</h2>
            </header>

            <section className="content mb-4">
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</p>
                        <p><strong>Publié le 14/03/2025 par Roberto Delavega</strong></p>
                    </Col>
                </Row>
            </section>

            <Container className="comments mb-5">
                <h3>Espace Utilisateur</h3>

                {/* Carte utilisateur responsive */}
                <Row className="align-items-center d-flex userImageCol mb-3 mx-5">
                    <Col xs={12} md={3} className="text-center mb-2 mb-md-0">
                        <Image
                            className="userImageComment"
                            src={currentUser.image}
                            alt="Image de l'utilisateur"
                            roundedCircle
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={9} className="text-center text-md-start">
                        <p className="mb-1 role"><strong>{currentUser.role}</strong></p>
                        <p className="mb-1 status">{currentUser.status}</p>
                        <p className="mb-0"><strong>{currentUser.name}</strong></p>
                    </Col>
                </Row>

                <Container>
                    <Form className="mb-3">
                        <Form.Group controlId="newComment">
                            <Form.Control
                                className="commentInput mb-3"
                                type="text"
                                placeholder="Ajoutez votre commentaire..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyPress={handleKeyPress} // Ajout de l'écoute d'événement sur "Entrée"
                            />
                        </Form.Group>
                        <Button className="custom-button-2" onClick={addComment}>
                            Poster
                        </Button>
                    </Form>
                </Container>
                <h3 className="mb-3">Commentaires</h3>

                {/* Affiche uniquement les commentaires visibles */}
                <ul className="list-unstyled">
                    {comments.slice(0, visibleCount).map((comment, index) => (
                        <li key={comment.id} className="mb-3">
                            <Row className="align-items-center comms">
                                <Col className="userImageCommentCol" xs={3}>
                                    <Image
                                        className="userImageComment"
                                        src={comment.image}
                                        alt={`Avatar de ${comment.name}`}
                                        roundedCircle
                                        fluid
                                    />
                                </Col>
                                <Col>
                                    <p className="mb-2 commentName">{comment.name}</p>
                                    <p className="mb-2 commentText">{comment.text}</p>
                                    <p className="mb-2 commentDate">{comment.date}</p>
                                </Col>
                                {/* Bouton de suppression visible uniquement pour l'utilisateur connecté */}
                                {comment.name === currentUser.name && (
                                    <Col xs={2} className="text-end">
                                        <Button
                                            className='deleteButton'
                                            size="sm"
                                            onClick={() => deleteComment(comment.id)}
                                        >
                                            X
                                        </Button>
                                    </Col>
                                )}
                            </Row>
                        </li>
                    ))}
                </ul>

                {/* Boutons pour afficher ou réduire les commentaires */}
                <div className="d-flex justify-content-between">
                    {visibleCount < comments.length && (
                        <Button className="custom-button-2" onClick={showMoreComments}>
                            Afficher plus
                        </Button>
                    )}
                    {visibleCount > 5 && (
                        <Button variant="secondary" onClick={reduceComments}>
                            Réduire
                        </Button>
                    )}
                </div>
            </Container>
        </Container>
    );
}

export default News