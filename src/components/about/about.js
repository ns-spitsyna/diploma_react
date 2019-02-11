import React from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';


const AboutBlock = styled.div`
    background-color: #fff;
	padding: 80px 0 110px 0;

    .about__text
    {
        font-size: 14px;
        margin-top: 40px;
        text-align: center;
    }
`;
const About = () => {
    return (
        <AboutBlock>
			<Container>
				
				<Row>
					<Col lg={{ size: 6, offset: 3 }}>
                        <div className="title">About Us</div>
                        <img className="beanslogo" src={process.env.PUBLIC_URL+'img/logo/Beans_logo_dark.svg'} alt='Beans logo' />
                        <div className="about__text">
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p>
                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                            </p>
                        </div>
					</Col>
					
				</Row>
			</Container>
        </AboutBlock>
    );
};

export default About;
