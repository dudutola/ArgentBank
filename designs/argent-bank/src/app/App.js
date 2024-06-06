import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from "../pages/Home";
import { Header } from "../common/components/Header";
import { Footer } from "../common/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
