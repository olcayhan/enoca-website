import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';
import Search from './components/Search';
import General from './components/categories/General';
import Business from './components/categories/Business';
import Entertainment from './components/categories/Entertainment';
import Health from './components/categories/Health';
import Science from './components/categories/Science';
import Sport from './components/categories/Sport';
import Technology from './components/categories/Technology';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/general" element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sport />} />
          <Route path="/technology" element={<Technology />} />







        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
