import './App.css';
import React, {useState} from "react";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import Navbar from "./routes/Navbar";
import About from "./routes/About";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Tutorials from "./routes/Tutorials";
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom";



function App() {
  const [currentForm , setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <>
        <Router>
            <Navbar />
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/tutorials' element={<Tutorials />} />
          </Routes>
        </Router>
      </>

  )
}

export default App;