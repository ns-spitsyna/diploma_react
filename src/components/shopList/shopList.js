import React, {Component} from 'react';
// import ShopItems from '../shopItem';
// import {Col, Row, Container} from 'reactstrap';

import ShopItems from '../shopItem';
export default class ShopList extends Component {
   

    render() {

       
        return (
            <>
            <div className="shop__wrapper">
                <ShopItems/>
                <ShopItems/>
                <ShopItems/>
                <ShopItems/>
                <ShopItems/>
            </div>
             
           
         </>
        );
    }
}