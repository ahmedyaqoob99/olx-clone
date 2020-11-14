import React from 'react';
import Card from './Card.jsx';
import Banner from './Banner.jsx';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
        <div>
          <Banner/>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <Card/>
          </Link>
        </div>
    )
  }
}

export default Main;
