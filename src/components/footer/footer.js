import React from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
const FooterBlock = styled.section`
 
 padding: 20px 0;

       
`;

const FooterList = styled.ul`
 
	
	align-items: flex-end;
	display: flex;
	list-style-type: none;
	margin-top: 30px;

       
`;


const FooterItem = styled.li`
   
        font-size: 12px;
        font-weight: 400;
        margin-right: 40px;
        
         a
        {
            color: #000;
        }
        a:visited
        {
            color: #000;
            text-decoration: none;
        }
        a:hover
        {
            color: #000;
            text-decoration: none;
        }   
    
`;

const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <Row>
					<Col lg={{ size: 5, offset: 4 }}>
                    <FooterList>
                        
                        <FooterItem>
                            <Link to='/'>
                                <img src={process.env.PUBLIC_URL+'img/logo/Logo_black.svg'}  alt="logo"/>
                            </Link>
                        </FooterItem>
                        <FooterItem>
                            <Link to='/coffee'>Our coffee</Link>
                        </FooterItem>
                        <FooterItem>
                            <Link to='/goods'>For your pleasure</Link>
                        </FooterItem>
                    </FooterList>
                    </Col>
                </Row>
            </Container>
            <img className="beanslogo" src={process.env.PUBLIC_URL+'img/logo/Beans_logo_dark.svg'}  alt="Beans logo"/>
        </FooterBlock>
        
    );
};

export default Footer;