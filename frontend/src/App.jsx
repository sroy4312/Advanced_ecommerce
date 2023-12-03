import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CustomerRouter from './routes/CustomerRouter';

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/*" element={<CustomerRouter />} />
      </Routes>
    </div>
  )
}

export default App;
