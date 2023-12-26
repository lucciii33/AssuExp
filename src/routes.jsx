import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import QuienEs from './components/quienEs';
import Services from './components/services';
import {LastBanner} from './components/last-banner';
import Podcats from './components/podcast';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienEs" element={<QuienEs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/last-banner" element={<LastBanner />} />
        <Route path="/podcast" element={<Podcats />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;