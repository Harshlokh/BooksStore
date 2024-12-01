import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PrivateRoutes from './guard/PrivateRoutes';
import './index.css';
import { BookProvider } from './components/BookContext';
import AdminPageDash from './AdminDataWatcher/AdminPageDash';
import AddContentUser from './AdminDataWatcher/AddContentUser';
import AdminLogin from './AdminDataWatcher/AdminLogin';


function App() {
  
  const [pages, setPages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Admin login status

  useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem('pages'));
    if (storedPages) {
      setPages(storedPages);
    }
  }, []);

  const addPage = (title, bookname, bdate,btime) => {
    const newPage = { title, bookname, bdate,btime };
    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };

  const deletePage = (index) => {
    const updatedPages = pages.filter((_, i) => i !== index);
    setPages(updatedPages);
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };


  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/APD' element={<AdminPageDash  pages={pages} isAdmin={isAdmin} deletePage={deletePage} />} /> 
          <Route path="/add" element={<AddContentUser addPage={addPage} />} />
        </Route>
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

      </Routes>
    </Router>

   
    </div>
  );
}

export default App;
