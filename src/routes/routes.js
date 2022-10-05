import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Courses,
  Examples,
  QnA,
  About,
} from '../pages';

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/examples" element={<Examples />} />
    <Route path="/about" element={<About />} />
    <Route path="/qna" element={<QnA />} />
  </Routes>
);

export default routes;