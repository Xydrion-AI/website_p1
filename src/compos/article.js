import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import CommentLikeButton from './likebutton';

function ArticlePage() {
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [newComment, setNewComment] = useState("");
    const [visibleCount, setVisibleCount] = useState(5);

    const defaultUser = {
        name: "Anonyme",
        image: "/assets/images/avatar.svg",
        status: "Connecté",
        role: "Visiteur"
    };

    const currentUser = defaultUser;

    // Fonction pour charger les articles à partir du fichier JSON
    useEffect(() => {
        fetch('/src/data/news.json')
            .then((response) => response.json())
            .then((data) => {
                const articleData = data.articles.find(article => article.id === parseInt(id));
                setArticle(articleData);
                setComments(articleData.comments || []);
            })
            .catch((error) => console.error('Erreur de chargement des articles:', error));
    }, [id]);

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

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addComment();
        }
    };

    const showMoreComments = () => {
        setVisibleCount(visibleCount + 5);
    };

    const reduceComments = () => {
        setVisibleCount(5);
    };

    const deleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id);
        setComments(filteredComments);
    };

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

    const editComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, editing: !comment.editing } : comment
        );
        setComments(updatedComments);
    };

    const updateComment = (id, text) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, text, editing: false } : comment
        );
        setComments(updatedComments);
    };

    if (!article) {
        return <div className='text-color-2'>Chargement...</div>;
    }

    return (
        <Container className="newsContainer text-color-2 my-4">
            <header className="text-center mb-4">
                <Image
                    className="imageArticle my-4"
                    src={article.imageURI}
                    alt="Image de l'article"
                    fluid
                    rounded
                />
                <h2 className="newsContainer mt-4">{article.title}</h2>
            </header>

            <section className="content mb-4">
                <Row>
                    <Col>
                        <article>{article.content}</article>
                        <p><strong>Publié le {article.date} par {article.author}</strong></p>
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
                                        alt={`Avatar de ${comment.name}`}
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
                                                {comment.editing ? 'Enregistrer' : 'Modifier'}
                                            </Button>
                                            <Button
                                                className='deleteButton'
                                                size="sm"
                                                onClick={() => deleteComment(comment.id)}
                                            >
                                                X
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
                            Afficher plus
                        </Button>
                    )}
                    {visibleCount > 5 && (
                        <Button variant="secondary" onClick={reduceComments}>
                            Réduire
                        </Button>
                    )}
                </Container>
            </Container>
        </Container>
    );
}

export default ArticlePage;