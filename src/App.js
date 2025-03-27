import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import ScrollToTopArrow from "./compos/scrolltotop";
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import Home from './pages/home/home';
import News from './pages/news/news.js';
import Contact from "./pages/contactUs/contactus";
import Informations from "./pages/informations/informations";
import Register from "./pages/register/register";
import SignIn from "./pages/signin/signin";
import Forgot from "./pages/forgot/forgot";
import ArticlePage from "./compos/article.js";


/* Je ne sais pas où je peux en parler donc je vais le faire ici car il y a peu de chose.
  La toute première chose que j'ai fais pour ce site est l'architecture des dossiers et fichiers, je me suis uniquement basé sur les notes que j'ai pris durant les cours.
  Ensuite j'ai fais un peu de ménage, je pense que je pourrais en faire un peu plus...
  Appel de mes composants communs à toutes les pages & système de routage qui sera utilisé dans la Navbar (Banner)*/
function App() {
  return (
    <BrowserRouter>
      <div id="main-container" className="d-flex flex-column min-vh-100">
        <header>
          <Banner />
        </header>
        <main className="flex-grow-1 container-fluid px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="/news/:id" element={<ArticlePage />} /> {/* Route dynamique pour afficher l'article */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ScrollToTopArrow/>
    </BrowserRouter>
    
  );
}

export default App;