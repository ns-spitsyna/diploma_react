import React, {Component} from 'react';
import styled from 'styled-components';
import {Form} from 'reactstrap';
import CoffeeService from '../../services/coffeeService.js';

const Label =styled.label`

        margin-right: 20px;
        margin-bottom: 60px;    
    
`
const InputSearch =styled.input`
    border: none;
    border-radius: 4px;
    box-shadow: 4px 4px 20px rgba(0,0,0,.25);
    font-size: 12px;
    height: 30px;
    padding: 0 15px;
    width: 180px;
    
    ::-webkit-input-placeholder
    {
        text-align: center;
    }
    ::-ms-input-placeholder
    {
        text-align: center;
    }
    ::placeholder
    {
        text-align: center;
    }


`


export default class ShopSearch extends Component{
    coffeeService = new CoffeeService();
    

    render(){
         

        return(
            <Form>
                <Label  htmlFor="filter">Looking for</Label>
                <InputSearch 
                    id="filter" 
                    type="text" 
                    placeholder="start typing here..."
                    onChange = {this.onUpdateSearch}
                    

                    

                ></InputSearch>
            </Form>

        )
    }

};