import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import ErrorMessage from '../errorMessage';
const ShopPoint = styled.div`
     margin-top: 16px;
     
     :first-child
    {
        margin-top: 26px;
    }

    span
    {
        font-weight: 700;
    }
    .shop__point-price
    {
        font-size: 24px;
        font-weight: 400!important;
    }

    `;

export default class ShopDetails extends Component {
    state = {
        itemDetails: null,
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemName !== prevProps.itemName){
            this.updateChar();
        }
    }
    
  
  
    updateChar(){
        const {itemName} = this.props;
        if (!itemName) {
            return;
        }
        
        const {getDetails} = this.props;
        
        getDetails(itemName)
            .then((itemDetails) => {
                this.setState({itemDetails})
            })
            
            
        //this.foo.bar = 0;    
    }


    render() {
        if (!this.state.itemDetails) {
            return <span className="select-error">Please select a character</span>
            
        }
               
        if (this.state.error){
            return <ErrorMessage/>
        }

        const {itemDetails} = this.state;
        const {name, country, url, price,description } = itemDetails;

        return (
	         <Row>
                <Col lg={{ size: 5, offset: 1 }}>
                    <img className="shop__girl" src={url}  alt="girl"/>
                </Col>
                <Col lg="4">
                
                    <div className="title">{name}</div>
                     <img className="beanslogo" src={process.env.PUBLIC_URL+'/img/logo/Beans_logo_dark.svg'}  alt="Beans logo"/>
                    
                    <ShopPoint>
                        <span>Country:</span>
                        {country}
                    </ShopPoint>
                    <ShopPoint>
                        <span>Description:</span>
                        {description}
                    </ShopPoint>
                    <ShopPoint>
                        <span>Price:</span>
                        <span className="shop__point-price">{price}</span>
                    </ShopPoint>
                   
                
              
                </Col>
                            
              </Row>
        );
    }
}

  
