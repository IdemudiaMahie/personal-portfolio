import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import bgImage from '../assets/img/pexels-photo-14553705.jpeg';

function Content() {
  return (
    <main
    style={{
        minHeight: '100vh',
        background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgImage}) center / cover no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '90px',
      }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Content