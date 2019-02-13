import React, {Component} from 'react';
import {CoffeePage, GoodsPage, MainPage, CoffeeItem} from '../../components/pages/';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import CoffeeService from '../../services/coffeeService';
// import idGenerator from 'react-id-generator';

export default class App extends Component{
   
   coffeeService = new CoffeeService();
   
   render() {
     
   //this.coffeeService.getResource().then(res=>console.log(res.bestsellers));
   
   
   
  
    return ( 
      <Router>
         <div className="app">
            <Route path='/' exact component = {MainPage}/>
            <Route path='/coffee' exact component = {CoffeePage}/>
            <Route path='/goods' exact component = {GoodsPage}/>
           
         </div>
      </Router>  

    
    	)
     
    
   }
  
};

