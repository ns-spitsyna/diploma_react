 import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
const ShopPoint = styled.div`
     margin-top: 16px;
     
     :first-child
    {
        margin-top: 26px;
    }

    span
    {
        font-weight: 700;
    }
    .shop__point-price
    {
        font-size: 24px;
        font-weight: 400!important;
    }

    `;

export default class BestDetails extends Component {

    render() {
        return (
	         <Row>
                <Col lg={{ size: 5, offset: 1 }}>
                    <img className="shop__girl" src={process.env.PUBLIC_URL+'img/coffee_item.jpg'}   alt="girl"/>
                </Col>
                <Col lg="4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src={process.env.PUBLIC_URL+'img/logo/Beans_logo_dark.svg'}   alt="Beans logo"/>
                    
                    <ShopPoint>
                        <span>Country:</span>
                        Brazil
                    </ShopPoint>
                    <ShopPoint>
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ShopPoint>
                    <ShopPoint>
                        <span>Price:</span>
                        <span className="shop__point-price">16.99$</span>
                    </ShopPoint>
                
                </Col>
                            
              </Row>
        );
    }
}

  
