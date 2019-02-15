import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ShopSearch from '../shopSearch';
import ShopFilter from '../shopFilter';
import ShopList from '../shopList';
import Footer from '../footer';
import Banner from '../banner';
import AboutOur from '../aboutOur';
import {withRouter} from 'react-router-dom';
import CoffeeService from '../../services/coffeeService.js';
import ErrorMessage from '../errorMessage';

class CoffeePage extends Component{
    coffeeService = new CoffeeService();
     state = {
         error: false
    };
   componentDidCatch(){
       //console.log('error');
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
                            <Col lg={{ size: 4, offset: 2 }}>
                            <ShopSearch
                                onUpdateSearch = {this.onUpdateSearch}
                                />
                            </Col>
                            <Col lg="4">
                                <ShopFilter
                                    
                                />                    
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                            
                            <ShopList
                              
                                onItemSelected = {(itemName)=>{
                                           // console.log(itemName);
                                            this.props.history.push(itemName)
                                    }}
                                getData = {this.coffeeService.getAllCoffee}

                            />
                               
                            </Col>
                                                    
                        </Row>
                    </Container>
            </section>
            <Footer/>  

            </>

        )}

};
export default withRouter(CoffeePage);