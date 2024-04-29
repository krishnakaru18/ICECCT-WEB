import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import {
  Home,
  Gallery,
  Committees,
  Callfor,
  Paper,
  Program,
  Special,
  Registration,
  Plan,
  Down,
  Contact
} from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Committees" element={<Committees />} />
        <Route path="/Call-for-Papers" element={<Callfor />} />
        <Route path="/Paper-Status" element={<Paper />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Special-Sessions" element={<Special />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Plan-Travel" element={<Plan />} />
        <Route path="/Downloads" element={<Down />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
