import React from 'react';
import './App.css';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import TopHeader from './Components/TopHeader.jsx';
import Main from './Components/Main.jsx';
import AppRouter from './config/router';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopHeader/>
          <Header/>
          <AppRouter/>
          <Footer/>
        </div>
    )
  }
}

export default App;
