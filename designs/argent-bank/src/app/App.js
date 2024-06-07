import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { User } from "../pages/User";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/user' element={<User />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
