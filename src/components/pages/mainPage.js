import React, {Component} from 'react';
//import Preview from '../preview';
import About from '../about';
import BestList from '../bestList';
import BestDetails from '../bestDetails';

import Header from '../header';
import Footer from '../footer';
import {Col, Row, Container} from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';

import styled from 'styled-components';


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

class MainPage extends Component{
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
            <BestList/> 
            <Footer/>

            </>

        )
    }

}
export default withRouter(MainPage);