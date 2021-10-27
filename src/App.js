import './App.css';
import Hero from './components/hero/Hero';
import Navigation from './components/Navigation';
import { SliderData } from './components/hero/SliderData';
import Product from './components/products/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero slides={SliderData} />
      <Product />
      <Footer/>
    </div>
  );
}

export default App;
