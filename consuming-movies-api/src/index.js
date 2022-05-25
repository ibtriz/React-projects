import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/details.js';
import './../src/style/global.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);