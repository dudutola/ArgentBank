import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import { Home } from "../pages/Home";
import { LoginForm } from "../pages/LoginForm";
import { UserProfile } from "../pages/UserProfile";
import { Error } from "../pages/Error";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
