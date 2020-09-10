import React from 'react';
import {BrowserRouter} from "react-router-dom"
import ServicePage from './pages/ServicePage';
import AppROuter from './router/AppROuter';

function App() {
  return (
    <div>
     
    <BrowserRouter>
      <AppROuter/>
    </BrowserRouter>

      



    </div>
  );
}

export default App;
