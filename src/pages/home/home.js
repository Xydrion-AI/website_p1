import React from "react";
import NewCarousel from '../../compos/carousel1';
let VerticalBanner = './asset/image/bande_img.jpg'

function Home() {
    const carouselItems1 = [
        { title: 'Image 1', image: '/assets/images/img1.jpg' },
        { title: 'Image 2', image: '/assets/images/img1.jpg' },
        { title: 'Image 3', image: '/assets/images/img1.jpg' },
        { title: 'Image 4', image: '/assets/images/img1.jpg' },
        { title: 'Image 5', image: '/assets/images/img1.jpg' },
    ];
    const carouselItems2 = [
        { title: 'Image 1', image: '/assets/images/img2.jpg' },
        { title: 'Image 2', image: '/assets/images/img2.jpg' },
        { title: 'Image 3', image: '/assets/images/img2.jpg' },
        { title: 'Image 4', image: '/assets/images/img2.jpg' },
        { title: 'Image 5', image: '/assets/images/img2.jpg' },
    ];
    const carouselItems3 = [
        { title: 'Image 1', image: '/assets/images/img3.jpg' },
        { title: 'Image 2', image: '/assets/images/img3.jpg' },
        { title: 'Image 3', image: '/assets/images/img3.jpg' },
        { title: 'Image 4', image: '/assets/images/img3.jpg' },
        { title: 'Image 5', image: '/assets/images/img3.jpg' },
    ];
    return (
        <>
            <div className="container mx-auto text-center presentation" id="introduction">
                <div className="row" id="accueil">
                    <div className="text-color-2">
                        <h1>Bienvenue sur ce site</h1>
                    </div>
                    <div className="text-color-2">
                        <p>Il a été développé par un groupe de jeunes développeurs web dans le cadre de leur formation</p>
                    </div>
                    <div className="text-color-2">
                        <p>Nous partagerons ici un contenu lié à la technologie et le développement informatique.</p>
                    </div>
                </div>
                <div className="buttons d-flex justify-content-center">
                    <button type="button" className="btn btn-primary mx-2 my-2 btn-sm px-3">Créer un compte</button>
                    <button type="button" className="btn btn-secondary mx-2 my-2 btn-sm px-3">Se connecter</button>
                </div>
            </div>
            <NewCarousel items={carouselItems1}/>
            <div className="container mx-auto text-center">
                <div className="row">
                    <div>
                        <h2 className="text-color-2 my-2">Qui sommes-nous ?</h2>
                        <p className="text-color-2 my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</p>
                    </div>
                </div>
            </div>
            <NewCarousel items={carouselItems2}/>
            <div className="container mx-auto text-center text-color">
                <div className="row">
                    <div>
                        <h2 className="text-color-2 my-4">A propos de notre formation</h2>
                        <p className="text-color-2 my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem impedit
                            temporibus corrupti facere nostrum culpa officia libero, animi, nobis accusamus ullam pariatur
                            inventore minima quod ratione nihil officiis aut.
                            Aliquam officia delectus deleniti accusamus reprehenderit eum ullam, necessitatibus saepe voluptas
                            inventore minima similique hic esse at maxime soluta corporis, qui sit! Ad nihil eius exercitationem
                            corporis ab eligendi blanditiis.
                            Cum a, esse animi harum deserunt ullam laborum quaerat reiciendis odio ratione sed. Ipsam quia in,
                            quam quis, id illum eaque sint numquam itaque, atque voluptatem eos cupiditate autem soluta?</p>
                    </div>
                </div>
            </div>
            <div className="container img-fluid text-center text-color">
                <div><img src={VerticalBanner} id="longue-image" alt="Impossible d'afficher cette image" /></div>
            </div>
            <div className="container mx-auto my-5 text-center">
                <div className="row">
                    <div>
                        <h2 className="text-color-2 my-5">Pour aller en savoir plus, cliquer sur une des sections ci-dessous </h2>
                    </div>
                </div>
            </div>
            <NewCarousel items={carouselItems3}/>
        </>
    )

}

export default Home;