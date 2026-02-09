import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Content /> 
      <Footer />
    </Router>
  );
}

export default App
