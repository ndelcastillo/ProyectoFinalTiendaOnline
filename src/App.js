import './App.css';
import './variables/fonts.css';
import Footer from "./components/Footer/Footer";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartView from './components/CartView/CartView';
import MyProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Terrarios" />} />
            <Route path='/categoria/:cat' element={<ItemListContainer />} />
            <Route path='/terrarios/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkoutform' element={<CheckoutForm />} />
            <Route path="/checkout/:orderid" element={<Checkout />} />
            <Route path='*' element={<h1>404: Te perdiste</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
