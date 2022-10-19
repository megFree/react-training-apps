import './main.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './js/App';

createRoot(document.querySelector('#root')).render(<App />);
