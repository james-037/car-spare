// index.js (or your entry file)

import React from 'react';
import './App.css';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

const root = document.getElementById('root');
const rootContainer = createRoot(root); // Use createRoot from react-dom/client
rootContainer.render(<App />);

