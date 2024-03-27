import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wurzburg from './components/Wurzburg/Wurzburg';
//import App from './App';
//import CityPage from './components/CityPage/CityPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Wurzburg />
    </React.StrictMode>
);



