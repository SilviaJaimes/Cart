import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { FiltersProvider } from './context/filters.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </NextUIProvider>
)
