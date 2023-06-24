import './App.css';
import React, { useState, useEffect } from "react";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import setAuthToken from './server/utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  setAuthToken(localStorage.token);
  const [currentForm, setCurrentForm] = useState('login');
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const toggleForm = (formName) => setCurrentForm(formName);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get('/login', { headers: { 'Content-Type': 'application/json' } });
        if (isMounted) {
          setUser(response.data.user);
          setIsAdmin(response.data.admin);
        }
      } catch (error) {
        // Handle error here
        console.error('Error fetching user:', error);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Router className='big-container'>
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
          {user === null ? (
            <Spinner />
          ) : (
            <div>
              <Navbar profileData={{ user, isAdmin }} />
              <div className='row'>
                <Routes>
                  <Route path='/' element={<Courses />} />
                  <Route path='/about' element={<About />} />
                  <Route
                    path='/profile'
                    element={<Profile profileData={{ user, isAdmin }} />}
                  />
                </Routes>
              </div>
            </div>
          )}
        </div>
      )}
    </Router >
  );
}

export default App;