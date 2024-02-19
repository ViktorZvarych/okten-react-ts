import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CarsContainer from "./components/CarsContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <CarsContainer/>
);
