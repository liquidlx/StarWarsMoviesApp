import React from 'react';
import Routes from './routes';
import Header from './components/Header';

import './styles.css';


const App = () => (
  <div id="main-wrapper">
    <Header />
    <Routes />
  </div>
);

export default App;
