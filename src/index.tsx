import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './tailwind.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
