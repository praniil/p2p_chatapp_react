import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Frontend/navbar/Navbar';
// import Navbar from "./Frontend/"
import Home from "./Frontend/HomePage"
import './App.css';
import ChatWindow from './Frontend/chatWindow/ChatWindow';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/chatwindow" element={<ChatWindow/>}/>
        <Route path="/"/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
