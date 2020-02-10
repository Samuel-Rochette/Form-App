import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <React.Fragment>
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
      </React.Fragment>
  );
}

export default App;
