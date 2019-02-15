import React from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';

const BannerBlock = styled.div`
	background: url(${process.env.PUBLIC_URL+'/img/Coffee_bg.jpg'}) center center no-repeat;
	background-size: cover;
	height: 260px;

    h1
    {
        margin-top: 60px;
    }
   
    
`;
const Banner = () => {
    return (
        <BannerBlock>
            <Container>
                    
                    <Row>
                        <Col lg="6">
                        <Header/>
                        
                        </Col>
                        
                    </Row>
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
        </BannerBlock>    
    )
}
export default Banner;