import React from 'react';
import { useState, createContext } from 'react';
import './sass/App.scss';
import Header from './JSX/Header';
import Slider from './JSX/Slider';
import Listsale from './JSX/Listsale';
import Listitems from './JSX/Listitems';
import Lastest from './JSX/Lastest';
import Footer from './JSX/Footer'


export const items = createContext([])
function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <items.Provider value={{count, setCount}}>
      <Header />
      <Slider />
      <Listsale />
        <Listitems />
        <Lastest />
      </items.Provider>
      <Footer />
    </div>
  );
}

export default App;
