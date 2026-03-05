import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CompanyTicker from './components/CompanyTicker';
import About from './components/About';
import Expertise from './components/Expertise';
import Impact from './components/Impact';
import StrategicImpact from './components/StrategicImpact';
import LinkedInFeeds from './components/LinkedInFeeds';
import Interview from './components/Interview';
import Footer from './components/Footer';
import ImpactPage from './pages/ImpactPage';

function Home() {
  return (
    <div className="App w-full">
      <Hero />
      <CompanyTicker />
      <About />
      <Expertise />
      <Impact />
      <StrategicImpact />
      <LinkedInFeeds />
      <Interview />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impact" element={<ImpactPage />} />
    </Routes>
  );
}

export default App;

