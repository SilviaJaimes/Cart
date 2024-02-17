import { products as initialProducts } from './mocks/products.json';
import Header from './components/Header.jsx'
import Products from './components/Products.jsx';
import Footers from './components/Footers.jsx';
import { IS_DEVELOPMENT } from './config.js';
import useFilters from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';
import NavbarPrincipal from './components/NavbarPrinciapl.jsx';

export default function App() {
  const { filterProducts } = useFilters();
  const filteredProudcts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <NavbarPrincipal/>
      <Header/>
      <Products products={filteredProudcts}/>
      { IS_DEVELOPMENT && <Footers /> } 
    </CartProvider>
  );
};
