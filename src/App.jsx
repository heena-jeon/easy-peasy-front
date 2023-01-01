import React from 'react';
import { Header } from 'layouts';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>    
  )
};

export default App;