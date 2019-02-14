import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import idGenerator from 'react-id-generator';
//import CoffeeService from '../../services/coffeeService';

const ShopItem = styled.div`
    background: rgba(255,255,255,.65);
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0,0,0,.25);
    margin: 0px 40px 60px 40px;
    min-height: 240px;
    padding: 22px 24px;
    transition: .3s all;
    width: 220px;

    :hover
    {
        box-shadow: 5px 5px 30px rgba(0,0,0,.25);
    }
    img
    {
        display: block;
        height: 130px;
        margin: 0 auto;
        object-fit: cover;
        o-object-fit: cover;
        width: 151px;
    }
    .shop__item-country,.shop__item-price,.shop__item-title
    {
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
    

`  
export default class ShopList extends Component {
     //coffeeService = new CoffeeService();
    state = {
        itemList: null,
        loading: true,
        error: false
    };

    componentDidMount(){

      const {getData} = this.props;
      
      getData()
        .then(itemList =>{
               // console.log(itemList);
            this.setState({
                itemList,
                loading: false
            })
        })
    }

   renderItems(arr){
      
        return arr.map(({name, country, url, price, description}) => {

            return (
                 
                <ShopItem 
                    key={idGenerator()}
                     /* onClick = {()=>this.props.onItemSelected(name)} */ >
                    <img src={url} alt="coffee"/>
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}</div>
                </ShopItem>
            )
        })
    }

    render() {
       const {itemList, loading} = this.state;

       // const errorMessage = error ? <ErrorMessage/> :null;
        const spinner = loading ? <Spinner/>: null;
        const content = !(loading) ?  this.renderItems(itemList) : null;
        return (
            <>              
                <div className="list__wrapper">
                     {spinner}
                     {content}  
                 </div>
            </>
        );
    }
}