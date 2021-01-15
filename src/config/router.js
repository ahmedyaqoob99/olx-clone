import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Components/Main';
import Product from '../Components/Product';
import CreateProduct from '../Components/CreateProduct';

class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Main}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="/createProduct" component={CreateProduct}/>
            </Router>
        )
    }
}

export default AppRouter;