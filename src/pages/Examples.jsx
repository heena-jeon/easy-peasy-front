import React from 'react';
import Sidebar from '../layouts/Sidebar';
import '../assets/styles/sidebars.css';
import ExamplesContent from '../features/examples/ExamplesContent';

const Examples = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ExamplesContent />
    </div>
  )
};

export default Examples;