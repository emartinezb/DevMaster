import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { productDetails } from './components/products/ProductDetails';
//Router de react
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className="App">
      <Header />
      <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/producto/:id" element={<productDetails />}></Route>
        </Routes>

      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
