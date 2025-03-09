import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import Home from './pages/home/home';
import News from './pages/news/news';

function App() {
  return (
    <>
      <Banner />
      <main className="container-fluid px-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
