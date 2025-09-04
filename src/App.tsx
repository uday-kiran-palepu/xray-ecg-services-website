import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ABGPage } from './pages/ABGPage';
import { ECGPage } from './pages/ECGPage';
import { XRayPage } from './pages/XRayPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Poppins']">
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abg" element={<ABGPage />} />
            <Route path="/ecg" element={<ECGPage />} />
            <Route path="/xray" element={<XRayPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;