import React, {Component} from 'react';
import About from '../about';
import ShopList from '../shopList';
//import BestDetails from '../bestDetails';

import Header from '../header';
import Footer from '../footer';
import {Col, Row, Container} from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';

import styled from 'styled-components';
import CoffeeService from '../../services/coffeeService.js';
// import {Link} from 'react-router-dom';

const Main = styled.div`
    background: url(${process.env.PUBLIC_URL+'/img/Main_bg.jpg'}) center center no-repeat;
    background-size: cover;
    height: 640px;

    h1
    {
        margin-top: 110px;
        color: #fff;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 0;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
    .preview__subtitle
    {
        color: #fff;
        font-weight: 700;
        margin-bottom: 0;
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
        text-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
    
    .preview__btn
    {
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0 4px 4px rgba(0,0,0,.05);
        color: #fff;
        display: block;
        font-size: 14px;
        font-weight: 700;
        height: 30px;
        line-height: 28px;
        margin: 0 auto;
        margin-top: 18px;
        text-align: center;
        width: 120px;
    }
    .preview__btn:visited
    {
        color: #fff;
        text-decoration: none;
    }
    .preview__btn:hover
    {
        color: #fff;
        text-decoration: none;
    }
    

`;
const BestBlock = styled.section`
   
    background:  url(${process.env.PUBLIC_URL+'/img/paper.jpg'}) center center no-repeat;
    background-color: #fff;
    background-size: cover;
    padding: 80px 0 110px 0;
    div{
         box-shadow: none!important;
    }
    div:hover{
         box-shadow: none!important;
    }
    .title{
        margin-bottom: 40px;
    }

    
`;
class MainPage extends Component{
   
coffeeService = new CoffeeService();
    state = {
        selectedItem: null, 
        error: false
    }
    
     onItemSelected = (name) => {
        
        this.setState({
            selectedItem:name

        })


    }
    // componentDidCatch(){
        
    //     this.setState({
    //         error: true
    //     })
    // }
    render(){
        return(
            <>
            <Main>
                <Container>
                <Row>
                    <Col lg="6">
                        <Header/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={{ size: 10, offset: 1 }}>
                        <h1 className="title-big">Everything You Love About Coffee</h1>
                        <img className="beanslogo"src={process.env.PUBLIC_URL+'img/logo/Beans_logo.svg'}  alt="Beans logo"/>
                        <div className="preview__subtitle">We makes every day full of energy and taste</div>
                        <div className="preview__subtitle">Want to try our beans?</div>
                        <Link to='/coffee' className="preview__btn">More</Link>
                    </Col>
                    
                </Row>
                </Container>
            </Main>
            <About/> 
            <BestBlock>
            <Container>
                    <div className="title">Our best</div>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
            <ShopList
                  /*onItemSelected = {(itemName)=>{
                    this.props.history.push(itemName)
                }}*/
                 getData = {this.coffeeService.getAllBest}
                
            /> 
                </Col>
                        </Row>
                     
                </Container>
            
            </BestBlock>
            <Footer/>

            </>

        )
    }

}
export default withRouter(MainPage);