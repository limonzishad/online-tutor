import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Logins/Login/Login';
import Signup from './components/Logins/Signup/Signup';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
