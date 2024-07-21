import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BurgerProvider } from './context/Burger';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BurgerProvider>
            <App />
        </BurgerProvider>
    </React.StrictMode>
);



