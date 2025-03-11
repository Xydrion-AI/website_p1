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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;