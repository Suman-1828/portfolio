import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skill from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import './components/navBar/style.scss';
import particlesConfig from './utils/particles';

function App() {

  const location = useLocation();
  console.log("Current path:", location.pathname);

  const handleInit = async (main) => {
    await loadFull(main);
    console.log("Particles engine fully loaded:", main);
};

const renderParticlesJsHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {/* {
        renderParticlesJsHomePage && <Particles id="particles" init={handleInit} options={particlesConfig} />
      } */}

      {/* navbar */}
      <Navbar />

      {/* main page content */}

      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skill />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
