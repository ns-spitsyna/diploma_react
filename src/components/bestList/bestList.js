import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
//import BestItem from '../bestItem';
import CoffeeService from '../../services/coffeeService';
import Spinner from '../spinner';
import idGenerator from 'react-id-generator';
const BestBlock = styled.section`
   
	background:  url(${process.env.PUBLIC_URL+'/img/paper.jpg'}) center center no-repeat;
	background-color: #fff;
	background-size: cover;
	padding: 80px 0 110px 0;

    
`;
const BestItemBlock = styled.div`
    background: rgba(255,255,255,.65);
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 40px;
    min-height: 240px;
    padding: 22px 24px;
    width: 220px;

    img
    {
        display: block;
        height: 130px;
        margin: 0 auto;
        object-fit: cover;
        o-object-fit: cover;
        width: 151px;
    }
    .best__item-price,.best__item-title
    {
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
        
`;


export default class BestList extends Component{
   
    coffeeService = new CoffeeService();
     state = {
        itemList: null,
        loading: true,
        error: false
    };

    componentDidMount(){
       
        //console.log('dfsd'); 
       this.coffeeService.getAllBest()
            .then(itemList =>{
                //console.log(itemList);
                this.setState({
                    itemList,
                    loading: false
                })
            })
    }

   renderItems(arr){
       //console.log(arr);
        return arr.map(({name, url,price}) => {

            return (
                 <BestItemBlock key={idGenerator()}>
                    <img src={url} alt="coffee"/>
                    <div className="best__item-title">{name}</div>
                    <div className="best__item-price">{price}</div>
                </BestItemBlock>
            )
        })
    }

render(){
  // console.log(this.coffeeService.getAllBest());
//this.coffeeService.getAllBest().then(bestsellers=>console.log(bestsellers));

const {itemList, loading} = this.state;

       // const errorMessage = error ? <ErrorMessage/> :null;
        const spinner = loading ? <Spinner/>: null;
        const content = !(loading) ?  this.renderItems(itemList) : null;

   
        return (
            
            <BestBlock>
                <Container>
                    <div className="title">Our best</div>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                                <div className="best__wrapper">
                                {spinner}
                                 {content}
                                 </div>
                            </Col>
                        </Row>
                     
                </Container>
            </BestBlock>
        );
  }
};


