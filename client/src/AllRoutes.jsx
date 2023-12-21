import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx'
import GuidePage from './Pages/GuidePage/GuidePage.jsx';
import Auth from './Pages/Auth/Auth.jsx';
import Prediction from './Pages/Prediction/Prediction.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Auth' element = {<Auth/>}/>
      <Route path='/Health_Section' element = {<GuidePage/>}/>
      <Route path='/Predictor' element = {<Prediction/>}/>
      <Route path='/Health_Section' element = {<GuidePage/>}/>
    </Routes>
  )
}

export default AllRoutes