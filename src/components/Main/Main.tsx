import React from 'react';
import './Main.scss';
import Countries from '../Countries/Countries';

const Main = () => {
  return (
    <main className="main">
      <h1 className="title">Страны мира</h1>
      <Countries />
    </main>
  );
};

export default Main;
