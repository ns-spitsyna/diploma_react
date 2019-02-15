import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Footer from '../footer';
import Banner from '../banner';
import AboutOur from '../aboutOur';
import ShopList from '../shopList';
import {withRouter} from 'react-router-dom';
import CoffeeService from '../../services/coffeeService.js';
import ErrorMessage from '../errorMessage';

class GoodsPage extends Component{
    coffeeService = new CoffeeService();
     state = {
         error: false
    };
   componentDidCatch(){
      
        this.setState({
            error: true
        })
    }
    render(){
          if (this.state.error){
                return <ErrorMessage/>
            }

        return(
            <>
            
            <Banner/>
            <section className="shop">      
                <Container>
                    
                    <AboutOur/>
                        <div className="line"></div>
                        
                        <Row>
                            
                            <Col lg={{ size: 10, offset: 1 }}>
                              <ShopList
                                    getData = {this.coffeeService.getAllGoods}
                                />
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