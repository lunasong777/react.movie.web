import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="hello" element={<h1>hello</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
  );
}

export default App;