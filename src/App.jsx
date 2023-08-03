import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import customAxios from './server/utils/customAxios'
import { Spinner } from 'react-bootstrap';
import setAuthToken from './server/utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Videos from './components/Videos/Videos';
import Create from "./components/Create/Create";

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
        const response = await customAxios('/login');
        if (isMounted) {
          setUser(response.data.user);
          setIsAdmin(response.data.admin);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (localStorage.getItem('token') !== null)
      fetchData();
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <Router>
      <div className='big-container'>
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
              <Spinner style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', zIndex: '111111' }} />
            ) : (
              <div>
                <Navbar profileData={{ user, isAdmin }} />
                <div className='row'>
                  <Routes>
                    <Route path='/' element={<Courses />} />
                    <Route path='/videos/:id' element={<Videos />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/create' element={<Create />} />
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
      </div>
    </Router>
  );
}

export default App;
