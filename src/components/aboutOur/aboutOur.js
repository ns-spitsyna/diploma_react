import React, {Component} from 'react';
//import styled from 'styled-components';
import {Col, Row} from 'reactstrap';

export default class AboutOur extends Component{
    
    render(){
        return(
           <>
             <Row>
                <Col lg={{ size: 4, offset: 2 }}>
                    <img className="shop__girl" src={process.env.PUBLIC_URL+'/img/coffee_girl.jpg'}   alt="girl"/>
                </Col>
                <Col lg="4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={process.env.PUBLIC_URL+'/img/logo/Beans_logo_dark.svg'} alt="Beans logo"/>
                    <div className="shop__text">
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                    
                        <p>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                            so questions. <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                            is song that held help face.
                        </p>
                    </div>
                
                </Col>
                            
            </Row>
           </>

        )
    }

}