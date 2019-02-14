import React, {Component} from 'react';
import {CoffeePage, GoodsPage, MainPage} from '../../components/pages/';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import CoffeeService from '../../services/coffeeService';


export default class App extends Component{
   
   // coffeeService = new CoffeeService();
   
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

