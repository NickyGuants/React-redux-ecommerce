import './App.css';
import Hero from './components/hero/Hero';
import Navigation from './components/Navigation';
import { SliderData } from './components/hero/SliderData';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero slides={SliderData} />
      
    </div>
  );
}

export default App;
