import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import bgImage from '../assets/img/pexels-photo-14553705.jpeg';
import AddProject from '../pages/projects/AddProject';
import EditProject from '../pages/projects/EditProject';
import AddService from '../pages/services/AddService';
import EditService from '../pages/services/EditService';
import ListUser from '../pages/users/ListUser';
import EditUser from '../pages/users/EditUser';

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
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/services/add" element={<AddService />} />
        <Route path="/services/edit/:id" element={<EditService />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/users/list" element={<ListUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Content