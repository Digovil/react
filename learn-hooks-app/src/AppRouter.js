import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from "react-router-dom";

import { AboutScreen } from './components/useContext/AboutScreen';
import { HomeScreen } from './components/useContext/HomeScreen';
import HookScreen from './components/useContext/HookScreen';
import { LoginScreen } from './components/useContext/LoginScreen';

export const AppRouter = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact="true" path='/about' element={<AboutScreen />}/>
          <Route exact="true" path='/login' element={<LoginScreen />}/>
          <Route exact="true" path='/home' element={<HomeScreen />}/>
          <Route exact="true" path='/' element={<HookScreen />}/>
          <Route exact="true" path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </div>
    </Router>

    )
}
