import React from 'react';
import './App.scss'; // Import main Sass file

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePR from "./comps/homePage";
import Points from './comps/point';
import NavBar from './comps/navbar';
import PointsTwenty from './comps/PointTwenty';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePR />}/>
        <Route path='/point' element={<Points />}/>
        <Route path='/point20' element={<PointsTwenty />}/>
      </Routes>
    </Router>
  );
};

export default App;
