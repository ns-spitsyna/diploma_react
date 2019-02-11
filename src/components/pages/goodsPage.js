import React, {Component} from 'react';
//import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
// import ShopSearch from '../shopSearch';
// import ShopFilter from '../shopFilter';
// import ShopItems from '../shopItem';

import Footer from '../footer';
import Banner from '../banner';
import AboutOur from '../aboutOur';
import ShopItems from '../shopItem';
import {withRouter} from 'react-router-dom';
class GoodsPage extends Component{
    render(){
        return(
            <>
            
            <Banner/>
            <section className="shop">      
                <Container>
                    
                <AboutOur/>
                    <div className="line"></div>
                    
                    <Row>
                        
                        <Col lg={{ size: 10, offset: 1 }}>
                            <div className="shop__wrapper">
                            
                                <ShopItems/>
                                <ShopItems/>
                                <ShopItems/>
                                <ShopItems/>
                                <ShopItems/>
                                <ShopItems/>
                            </div>
                        
                        </Col>
                        
                        
                    </Row>
                </Container>
                </section>
                   
            <Footer/>  

            </>

        )
    }

}
export default withRouter(GoodsPage);