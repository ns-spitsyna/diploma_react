import React, {Component} from 'react';
//import styled from 'styled-components';
import {Container} from 'reactstrap';
import Header from '../header';
import Footer from '../footer';
import Banner from '../banner';
import ShopDetails from '../shopDetails';
import CoffeeService from '../../services/coffeeService';


export default class CoffeeItem extends Component{
    coffeeService = new CoffeeService();
    render(){
        return(
            <>
            <Header/>
            <Banner/> 
           
                <Container>
                        
                    <ShopDetails 
            
                        itemName = {this.props.itemName}
                        getDetails={this.coffeeService.getBest}
                    />
                    
                                
                
                </Container>
                
                      
             <Footer/>    
            </>
             

        );
    };

};
