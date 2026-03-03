import Hero from './components/Hero';
import CompanyTicker from './components/CompanyTicker';
import About from './components/About';
import Expertise from './components/Expertise';
import Impact from './components/Impact';
import StrategicImpact from './components/StrategicImpact';
import LinkedInFeeds from './components/LinkedInFeeds';
import Interview from './components/Interview';
import Footer from './components/Footer';

function App() {
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

export default App;

