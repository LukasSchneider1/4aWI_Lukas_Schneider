import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'
import GetBundesliga from './components/GetBundesliga';
import GetPremierLeague from './components/GetPremierLeague';
import GetLigueA from './components/GetLigueA';
import Players from './components/SearchPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/GetBundesliga" element={<GetBundesliga/>}/> 
        <Route path="/GetPremierLeague" element={<GetPremierLeague/>}/>
        <Route path="/GetLigueA" element={<GetLigueA/>}/>   
        <Route path="/Players" element={<Players/>}/>    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
