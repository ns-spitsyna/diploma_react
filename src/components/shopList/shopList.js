import React, {Component} from 'react';
// import ShopItems from '../shopItem';
// import {Col, Row, Container} from 'reactstrap';

//import ShopItems from '../shopItem';
import styled from 'styled-components';
const ShopItem = styled.div`
    background: rgba(255,255,255,.65);
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0,0,0,.25);
    margin: 60px 40px 0 40px;
    min-height: 240px;
    padding: 22px 24px;
    transition: .3s all;
    width: 220px;

    :hover
    {
        box-shadow: 5px 5px 30px rgba(0,0,0,.25);
    }
    img
    {
        display: block;
        height: 130px;
        margin: 0 auto;
        object-fit: cover;
        o-object-fit: cover;
        width: 151px;
    }
    .shop__item-country,.shop__item-price,.shop__item-title
    {
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
    

`  
export default class ShopList extends Component {
   

    render() {

       
        return (
            <>
            
                <ShopItem>
                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                    <div className="shop__item-title">
                        Solimo Coffee Beans 2kg
                    </div>
                    <div className="shop__item-country">Brazil</div>
                    <div className="shop__item-price">10.73$</div>
                </ShopItem>
            
             
           
         </>
        );
    }
}