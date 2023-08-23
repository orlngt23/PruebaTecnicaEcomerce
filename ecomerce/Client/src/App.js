import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product'
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Emprende from "./components/Emprende";
import Nosotros from './components/Nosotros';

function App() {
  return (
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Products" component={Products}/>
    <Route exact path="/Products/:id" component={Product}/>
    <Route exact path="/emprende" component={Emprende} />
    <Route exact path="/about" component={Nosotros} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
  </Switch>
  
  </>
  );
}

export default App;
