import React from 'react';
import styled from 'styled-components';



const BestItemBlock = styled.div`
    background: rgba(255,255,255,.65);
	border-radius: 8px;
	margin: 0 auto;
	margin-top: 40px;
	min-height: 240px;
	padding: 22px 24px;
	width: 220px;

    img
    {
        display: block;
        height: 130px;
        margin: 0 auto;
        object-fit: cover;
        o-object-fit: cover;
        width: 151px;
    }
    .best__item-price,.best__item-title
    {
        font-size: 14px;
        margin-top: 10px;
        text-align: right;
    }
        
`;
const BestItem = () => {
    return (
        <BestItemBlock>
			
            <div >
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                <div className="best__item-title">
                    Solimo Coffee Beans 2kg
                </div>
                <div className="best__item-price">10.73$</div>
            </div>
                       
				
        </BestItemBlock>
    );
};

export default BestItem;

