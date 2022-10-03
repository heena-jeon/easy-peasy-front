import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Courses,
  Faq,
  About,
} from '../pages';

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/about" element={<About />} />
    <Route path="/faq" element={<Faq />} />
  </Routes>
);

export default routes;