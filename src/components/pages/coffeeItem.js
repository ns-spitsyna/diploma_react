import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import Header from '../header';
import Footer from '../footer';
import Banner from '../banner';
import BestDetails from '../bestDetails';

const ShopWrapper =styled.div`
    padding: 70px 0 40px 0;
`



export default class CoffeeItem extends Component{
    render(){
        return(
            <>
            <Header/>
            <Banner/> 
            <ShopWrapper>
                    <Container>
                            
                        <BestDetails/>
                                    
                    
                    </Container>
                
                    </ShopWrapper>     
             <Footer/>    
            </>

        );
    };

};
