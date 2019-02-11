import React, {Component} from 'react';
import styled from 'styled-components';


const Filter = styled.div`
	align-items: center;
	display: flex;
    justify-content: space-between;
    .shop__filter-label
        {
            margin-right: 35px;
        }
       
      
    `
const Button = styled.button`
     
        background-color: #fff;
        border: none;
        box-shadow: 4px 4px 20px rgba(0,0,0,.25);
        cursor: pointer;
        font-size: 12px;
        height: 30px;
        outline: 0;
        width: 75px;
        margin-right: 5px;
    
        :first-child
        {
            border-radius: 4px 0 0 4px;
        }
        :last-child
        {
            border-radius: 0 4px 4px 0;
        }
        :focus
        {
            outline: 0;
        }

`  

export default class ShopFilter extends Component{
    render(){
        return(
            <Filter>
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    <Button>Brazil</Button>
                    <Button>Kenya</Button>
                    <Button>Columbia</Button>
                </div>
            </Filter>
            

        )
    }

}