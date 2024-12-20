import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import New from './components/New';
import Edit from './components/Edit';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;