import { useState } from 'react'

import './App.css'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import DB from "./Dashboard/DB";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/Home" element={<HomePage />}></Route>
      <Route path="/DB" element={<DB />}></Route>
      
     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
