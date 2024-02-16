import { products as initialProducts } from './mocks/products.json';
import {useState } from 'react';
import Header from './components/Header.jsx'
import Products from './components/Products.jsx';
import Footers from './components/Footers.jsx';
import { IS_DEVELOPMENT } from './config.js';
import useFilters from './hooks/useFilters.js';
import Cart from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

export default function App() {
  const { filterProducts } = useFilters();
  const filteredProudcts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProudcts}/>
      { IS_DEVELOPMENT && <Footers /> } 
    </CartProvider>
  );
};