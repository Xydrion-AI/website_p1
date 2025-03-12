import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import Home from './pages/home/home';
import News from './pages/news/news';
import Forums from './pages/forums/forums';
import Events from './pages/events/events';
import Contact from "./pages/contactUs/contactus";

/* Je ne sais pas où je peux en parler donc je vais le faire ici car il y a peu de chose.
  La toute première chose que j'ai fais pour ce site est l'architecture des dossiers et fichiers, je me suis uniquement basé sur les notes que j'ai pris durant les cours.

  Ensuite j'ai fais un peu de ménage, je pense que je pourrais en faire un peu plus...

  Appel de mes composants communs à toutes les pages & système de routage qui sera utilisé dans la Navbar (Banner)*/
function App() {
  return (
    <BrowserRouter>
      <Banner />
      <main className="container-fluid px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;