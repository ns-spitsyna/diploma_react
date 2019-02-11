import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import BestItem from '../bestItem';
import CoffeeService from '../../services/coffeeService';

const BestBlock = styled.section`
   
	background:  url(${process.env.PUBLIC_URL+'/img/paper.jpg'}) center center no-repeat;
	background-color: #fff;
	background-size: cover;
	padding: 80px 0 110px 0;

    
`;

export default class Best extends Component{
    coffeeService = new CoffeeService();
    
render(){
    
        return (
            <BestBlock>
                <Container>
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{ size: 10, offset: 1 }}>
                            
                            <div className="best__wrapper">
                               
                               <BestItem/>
                               <BestItem/>
                               <BestItem/>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </BestBlock>
        );
    }
};


