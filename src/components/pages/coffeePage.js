import React, {Component} from 'react';
//import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import ShopSearch from '../shopSearch';
import ShopFilter from '../shopFilter';
//import ShopItems from '../shopItem';
import ShopList from '../shopList';


import Footer from '../footer';
import Banner from '../banner';
import AboutOur from '../aboutOur';
import {withRouter} from 'react-router-dom';



class CoffeePage extends Component{
    render(){
        return(
            <>
           
            <Banner/>
            <section className="shop">
               
                    <Container>
                            
                        <AboutOur/>
                        <div className="line"></div>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                            <ShopSearch/>
                            </Col>
                            <Col lg="4">
                                <ShopFilter/>                    
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                            
                            <ShopList/>
                               
                            </Col>
                            
                            
                        </Row>
                    </Container>
            </section>
            <Footer/>  

            </>

        )
    }

}
export default withRouter(CoffeePage);