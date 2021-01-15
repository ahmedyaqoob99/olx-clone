import React from 'react';
import Card from './Card.jsx';
import Banner from './Banner.jsx';
import TopHeader from './TopHeader.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  render() {
    return (
        <div>
          {/* <Header/> */}

          <TopHeader/>
          
          <Banner/>
          
          <Card/>
          
          <Footer/>
        </div>
    )
  }
}

export default Main;
