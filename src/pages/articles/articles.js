import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import CommentLikeButton from '../../compos/likebutton'; 

//Non utilisé, reste ici pour l'historique
function Article({ user }) {
    // Default user information if no user is passed in
    // Utilisateur par défaut si aucun utilisateur n'est passé
    const defaultUser = {
        name: "Anonyme",
        image: "/assets/images/avatar.svg",
        status: "Connecté",
        role: "Visiteur"
    };

    // Current user either passed in as a prop or using default user
    // Utilisateur actuel soit passé en tant que prop, soit utilisant l'utilisateur par défaut
    const currentUser = user || defaultUser;

    // State for storing the list of comments
    // État pour stocker la liste des commentaires
    const [comments, setComments] = useState([
        { id: 1, name: "Jean", image: "/assets/images/avatar.svg", text: "Ceci est un faux commentaire", date: "14/03/2025 13:37:34", likes: 0, likedByUser: false, editing: false },
        { id: 2, name: "Marie", image: "/assets/images/avatar.svg", text: "Et celui ci aussi est un faux commentaire", date: "14/03/2025 13:37:32", likes: 0, likedByUser: false, editing: false },
    ]);

    // State for new comment text input
    // État pour l'entrée de texte du nouveau commentaire
    const [newComment, setNewComment] = useState("");

    // State for controlling the number of visible comments
    // État pour contrôler le nombre de commentaires visibles
    const [visibleCount, setVisibleCount] = useState(5);

    // Function to add a new comment
    // Fonction pour ajouter un nouveau commentaire
    const addComment = () => {
        if (newComment.trim() !== "") {
            const newEntry = {
                id: Date.now(),
                name: currentUser.name,
                image: currentUser.image,
                date: new Date().toLocaleString(),
                text: newComment,
                likes: 0,
                likedByUser: false,
                editing: false,
            };
            setComments([newEntry, ...comments]);
            setNewComment("");
        }
    };

    // Function to handle pressing Enter key for adding a comment
    // Fonction pour gérer la pression de la touche "Entrée" pour ajouter un commentaire
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addComment();
        }
    };

    // Function to show more comments
    // Fonction pour afficher plus de commentaires
    const showMoreComments = () => {
        setVisibleCount(visibleCount + 5);
    };

    // Function to reduce the visible comments to the initial 5
    // Fonction pour réduire les commentaires visibles à 5
    const reduceComments = () => {
        setVisibleCount(5);
    };

    // Function to delete a comment
    // Fonction pour supprimer un commentaire
    const deleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id);
        setComments(filteredComments);
    };

    // Function to handle liking/unliking a comment
    // Fonction pour gérer l'ajout/retirement d'un "like" sur un commentaire
    const likeComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id
                ? {
                    ...comment,
                    likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1,
                    likedByUser: !comment.likedByUser
                }
                : comment
        );
        setComments(updatedComments);
    };

    // Function to toggle comment editing mode
    // Fonction pour basculer en mode édition du commentaire
    const editComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, editing: !comment.editing } : comment
        );
        setComments(updatedComments);
    };

    // Function to update a comment's text after editing
    // Fonction pour mettre à jour le texte d'un commentaire après modification
    const updateComment = (id, text) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, text, editing: false } : comment
        );
        setComments(updatedComments);
    };

    return (
        <Container className="newsContainer text-color-2 my-4">
            <header className="text-center mb-4">
                <Image
                    className="imageArticle my-4"
                    src="/assets/images/img1.jpg"
                    alt="Image de l'article" // Image of the article
                    fluid
                    rounded
                />
                <h2 className="newsContainer mt-4">Article sur des lunettes posées sur un ordinateur portable</h2>
            </header>

            <section className="content mb-4">
                <Row>
                    <Col>
                        <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</article>
                        <p><strong>Publié le 14/03/2025 par Roberto Delavega</strong></p>
                    </Col>
                </Row>
            </section>

            <Container className="comments mb-5">
                <h3>Espace Utilisateur</h3>

                <Row className="align-items-center d-flex userImageCol mb-3 mx-5">
                    <Col xs={12} md={3} className="text-center mb-2 mb-md-0">
                        <Image
                            className="userImageComment"
                            src={currentUser.image}
                            alt="Image de l'utilisateur" // User's image
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
                                placeholder="Ajoutez votre commentaire..." // Placeholder text
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </Form.Group>
                        <Button className="custom-button-2" onClick={addComment}>
                            Poster
                        </Button>
                    </Form>
                </Container>
                <h3 className="mb-3">Commentaires</h3>

                <ul className="list-unstyled">
                    {comments.slice(0, visibleCount).map((comment) => (
                        <li key={comment.id} className="mb-3">
                            <Row className="align-items-center comms">
                                <Col className="userImageCommentCol" xs={3}>
                                    <Image
                                        className="userImageComment"
                                        src={comment.image}
                                        alt={`Avatar de ${comment.name}`} // Avatar of the commenter
                                        roundedCircle
                                        fluid
                                    />
                                </Col>
                                <Col>
                                    {comment.editing ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={comment.text}
                                            onBlur={(e) => updateComment(comment.id, e.target.value)}
                                        />
                                    ) : (
                                        <>
                                            <p className="mb-2 commentName">{comment.name}</p>
                                            <p className="mb-2 commentText">{comment.text}</p>
                                            <p className="mb-2 commentDate">{comment.date}</p>
                                        </>
                                    )}
                                </Col>
                                <Col className="buttonInteraction" xs={12} md={4}>
                                    <CommentLikeButton comment={comment} likeComment={likeComment} />
                                    {comment.name === currentUser.name && (
                                        <>
                                            <Button
                                                className='editButton'
                                                size="sm"
                                                onClick={() => editComment(comment.id)}
                                            >
                                                {comment.editing ? 'Enregistrer' : 'Modifier'} {/* Save or Edit */}
                                            </Button>
                                            <Button
                                                className='deleteButton'
                                                size="sm"
                                                onClick={() => deleteComment(comment.id)}
                                            >
                                                X {/* Delete button */}
                                            </Button>
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>

                <Container className="d-flex justify-content-between">
                    {visibleCount < comments.length && (
                        <Button className="custom-button-2" onClick={showMoreComments}>
                            Afficher plus {/* Show more */}
                        </Button>
                    )}
                    {visibleCount > 5 && (
                        <Button variant="secondary" onClick={reduceComments}>
                            Réduire {/* Reduce */}
                        </Button>
                    )}
                </Container>
            </Container>
        </Container>
    );
}

export default Article;
