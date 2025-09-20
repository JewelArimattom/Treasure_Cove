import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import ProductListPage from './pages/ListProducts';
import OrderPlaced from './pages/OrderPlaced';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155'
            },
          }}
        />
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/list-products" element={<ProductListPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/order-success" element={<OrderPlaced />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;

