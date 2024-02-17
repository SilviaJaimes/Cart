import { products as initialProducts } from './mocks/products.json';
import Header from './components/Header.jsx'
import Products from './components/Products.jsx';
import Footers from './components/Footers.jsx';
/* import { IS_DEVELOPMENT } from './config.js'; */
import useFilters from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';
import NavbarPrincipal from './components/NavbarPrincipal.jsx';

export default function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <NavbarPrincipal/>
      <Header/>
      <Products products={filteredProducts}/>
      {/* { IS_DEVELOPMENT && <Footers /> }  */}
      <Footers />
    </CartProvider>
  );
};
