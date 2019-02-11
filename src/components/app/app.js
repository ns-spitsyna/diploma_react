import React, {Component} from 'react';
import CoffeePage from '../pages/coffeePage';
import GoodsPage from '../pages/goodsPage';
import MainPage from '../pages/mainPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CoffeeService from '../../services/coffeeService';


export default class App extends Component{
   coffeeService = new CoffeeService();
   
   
   render() {
   //this.coffeeService.getResource().then(res=>console.log(res));
   //this.coffeeService.getAllBest().then(res=>console.log(res));
   
   
  
    return ( 
      <Router>
         <div className="app">
            <Route path='/' exact component = {MainPage}/>
            <Route path='/coffee' exact component = {CoffeePage}/>
            <Route path='/goods' exact component = {GoodsPage}/>
            {/* <Route path='/books/:id' render ={
               ({match}) => {
               const {id} = match.params;
               return <BooksItem bookId={id} />
               }
         } /> */}
         </div>
      </Router>  

    
    	)
     
    
   }
  
};

