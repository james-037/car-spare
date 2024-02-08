// App.js

import React from 'react';
import './App.css';
import ImageComponent from './components/ImageComponent';
import DetailsPage from './components/DetailsPage';
import Category from './components/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Routes>
            <Route path="/" element={<ImageComponent />} />
            <Route path="/details/:vehCode" element={<DetailsPage />} />
            <Route path="/category/:vehCode" element={<Category />} />
            <Route path="/itemdetails/:itemcode" element={<ItemDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

















































/*import React from 'react';
import './App.css';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CAR GALLERY</h1>
        <ImageComponent />
      </header>
    </div>
  );
}

export default App; */