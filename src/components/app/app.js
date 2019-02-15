import React, {Component} from 'react';
import {CoffeePage, GoodsPage, MainPage, CoffeeItem} from '../../components/pages/';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import CoffeeService from '../../services/coffeeService';
import ErrorMessage from '../errorMessage';


export default class App extends Component{
   
   // coffeeService = new CoffeeService();
   state = {
         error: false
    };
   componentDidCatch(){
         this.setState({
            error: true
        })
    }
   render() {
     if (this.state.error){
        return <ErrorMessage/>
    }

     
   //this.coffeeService.getResource().then(res=>console.log(res.bestsellers));
   
    return ( 
      <Router>
         <div className="app">
            <Route path='/' exact component = {MainPage}/>
            <Route path='/goods' exact component = {GoodsPage}/>
            <Route path='/coffee' exact component = {CoffeePage}/>
            <Route path='/coffee/:name' 
             render ={
                        ({match}) => {
                        const {name} = match.params;
                       
                        return <CoffeeItem itemName={name} />
                        }
                    } 
                    />
          
           
         </div>
      </Router>  

          	)
           
         }
        
};

