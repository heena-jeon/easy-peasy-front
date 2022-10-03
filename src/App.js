import React from 'react';
import routes from './routes/routes';
import {
  Header,
  Footer,
} from './layouts';


function App() {
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;
