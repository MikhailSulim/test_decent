import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main/Main';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Country from '../components/Country/Country';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:country" element={<Country />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
