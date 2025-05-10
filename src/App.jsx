import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySelector from './CategorySelector'
import ForSaleHouse from './forSaleHouse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelector />} />
        <Route path="/post/property" element={<ForSaleHouse />} />
      </Routes>
    </Router>
  );
};

export default App;
