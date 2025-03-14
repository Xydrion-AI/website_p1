import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import Home from './pages/home/home';
import News from './pages/news/news';
import Forums from './pages/forums/forums';
import Contact from "./pages/contactUs/contactus";
import Informations from "./pages/informations/informations";

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
            <Route path="/forums" element={<Forums />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/informations" element={<Informations />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;