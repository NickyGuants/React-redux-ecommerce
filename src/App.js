import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route path="/"  exact><Home /></Route>
            <Route path="/cart" ><Cart /></Route>
            <Route path="/details" ><ProductDetails /></Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
