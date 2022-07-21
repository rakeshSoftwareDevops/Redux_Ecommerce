import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Allproducts from './components/Allproducts';
import Footer from './components/Footer';
import PageNOTFound from './components/PageNOTFound';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent/>
          <Routes>
              <Route exact path="/" element={<Allproducts/>} />
              <Route exact path="/products/:productId" element={<ProductDetail/>} />
              <Route path="*" element={<PageNOTFound/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
