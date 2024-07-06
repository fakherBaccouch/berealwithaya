import './App.css';
import Hero from './components/layouts/hero';
import Navbar from './components/layouts/navbar';
import Learnwithme from './components/layouts/learnwithme';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You need to import the CSS for AOS
import { useEffect } from 'react';
import Buymybook from './components/layouts/buymybook';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);
  return (
    <div className="App hero-section h-screen  ">
      <Navbar/>
   <Hero/>
   <Learnwithme/>
   <Buymybook/>

  </div>
  );
}

export default App;
