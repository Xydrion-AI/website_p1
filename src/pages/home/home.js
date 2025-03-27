import React from "react";
import NewCarousel from '../../compos/carousel1';
import NewCarouselEvent from "../../compos/carouselEvents";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


// Je n'ai pas assez de temps pour continuer l'optimisation du code et ce n'est pas pertinent en terme de timing, en conditions réelles, je lierais mes données à mongoDB ou à un fichier json à minima pour clarifier le code
// De la même manière que pour mes news mais la section news est la dernière section que j'ai fait...
function Home() {
    /*Configuration de mes carousel d'images*/
    const carouselItems1 = [
        { title: 'Image 1', image: '/assets/images/img1.jpg' },
        { title: 'Image 2', image: '/assets/images/img1.jpg' },
        { title: 'Image 3', image: '/assets/images/img1.jpg' },
        { title: 'Image 4', image: '/assets/images/img1.jpg' },
        { title: 'Image 5', image: '/assets/images/img1.jpg' },
    ];
    const carouselItems2 = [
        { title: 'Image 1', image: '/assets/images/img5.jpg' },
        { title: 'Image 2', image: '/assets/images/img5.jpg' },
        { title: 'Image 3', image: '/assets/images/img5.jpg' },
        { title: 'Image 4', image: '/assets/images/img5.jpg' },
        { title: 'Image 5', image: '/assets/images/img5.jpg' },
    ];

    const carouselEvents1 = [
        {
            title: 'Image 1',
            image: '/assets/images/img4.jpg',
            articleTitle: 'Hackathon',
            date: "📅 lundi 24 avril 📍",
            description:
                "Description de l'évènement : 18 élèves de tout âge qui courrent 10 kilomètres avec un pc dans les mains et en tapant des lignes de codes pour hacker leur formateur"
            },
        {
            title: 'Image 2',
            image: '/assets/images/img5.jpg',
            articleTitle: 'Restaurant',
            date: "📅 mardi 25 avril 📍",
            description:
                "P'tite bouffe entre collègues développeur web et web mobile dans la campagne Mayennaise"
        },
        {
            title: 'Image 1',
            image: '/assets/images/img3.jpg',
            articleTitle: 'Torture de groupe',
            date: "📅 2025 📍",
            description:
                "Une équipe d'étudiants en développement web se fait torturer pendant 7 mois par un formateur qui aime beaucoup les pays de l'est"
        },
    ];

    return (
        /*Encapsulement de mon HTML de page d'accueil avec mes différentes sections et leur id ainsi que mes composants */
        <>
            <Container className="text-center" id="introduction">
                <Row id="accueil">
                    <h1 className="text-color-2">Bienvenue sur ce site</h1>
                    <p className="text-color-2">Il a été développé par un groupe de jeunes développeurs web dans le cadre de leur formation</p>
                    <p className="text-color-2">Nous partagerons ici un contenu lié à la technologie et le développement informatique. Cliquer sur un des boutons ci-dessous pour vous connecter ou créer un compte afin de pouvoir réagir aux différents articles de la section News</p>
                </Row>
                <Container>
                <Button as={Link} to="/register" className="custom-color mx-2 my-2 btn-sm px-3">Créer un compte</Button>
                <Button as={Link} to="/signin" className="custom-color mx-2 my-2 btn-sm px-3">Se connecter</Button>
                </Container>
            </Container>
            <NewCarousel items={carouselItems1} />
            <Container className="text-center">
                <Row>
                    <section id="aboutUs">
                        <h2 className="text-color-2 my-2">Qui sommes-nous ?</h2>
                        <p className="text-color-2 my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?
                            
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</p>
                    </section>
                </Row>
            </Container>
            <NewCarousel items={carouselItems2} />
            <Container className=" mx-auto text-center text-color">
                <Row>
                    <section id="about">
                        <h2 className="text-color-2 my-4">A propos de notre formation</h2>
                        <p className="text-color-2 my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</p>
                    </section>
                </Row>
            </Container>
            <Container className=" img-fluid text-center text-color">
                <img src='/assets/images/bande_img.jpg' id="longue-image" alt="image longue" />
            </Container>
            <Container className=" my-5" id="events">
                <h2 className="text-color-2" >Événements à venir</h2>
                <NewCarouselEvent items={carouselEvents1} />
            </Container>
        </>
    )

}

export default Home;