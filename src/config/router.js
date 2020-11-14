import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Components/Main';
import Product from '../Components/Product';

class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Main}/>
                <Route path="/product" component={Product}/>
            </Router>
        )
    }
}

export default AppRouter;