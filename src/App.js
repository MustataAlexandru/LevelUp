import './App.css';
import React, { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Navbar from "./routes/Navbar";
import About from "./routes/About";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Tutorials from "./routes/Tutorials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import setAuthToken from './server/utils/setAuthToken';

function App() {
  setAuthToken(localStorage.token);
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => setCurrentForm(formName);

  return (
    <Router>
      {localStorage.getItem('token') === null ? (
        <Routes>
          <Route
            path='/'
            element={
              currentForm === 'login' ? (
                <Login toggleForm={toggleForm} />
              ) : (
                <Register toggleForm={toggleForm} />
              )
            }
          />
        </Routes>
      ) : (
        <div>
          <Navbar />
          <div className='row'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/tutorials' element={<Tutorials />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;