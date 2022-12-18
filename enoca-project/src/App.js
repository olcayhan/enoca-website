import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
