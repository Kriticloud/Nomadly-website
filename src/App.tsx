/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Itinerary from './pages/Itinerary';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:id" element={<Destination />} />
        <Route path="/itineraries" element={<Itinerary />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}
