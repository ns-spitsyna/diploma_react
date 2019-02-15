import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.ul`
    align-items: flex-end;
	display: flex;
	list-style-type: none;
	margin-top: 30px;
`;


const HeaderList = styled.li`
    
	font-size: 12px;
	font-weight: 400;
	margin-right: 40px;
	text-shadow: 0 4px 4px rgba(0,0,0,.25);

    :first-child
    {
        transform: translateY(3px);
        webkit-transform: translateY(3px);
    }
    a {
        color: #fff;
    }
    a:visited
        {
            color: #fff;
            text-decoration: none;
        }
    a:hover
    {
        color: #fff;
        text-decoration: none;
    }   
    
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderList>
            <Link to='/'>
                    <img src={process.env.PUBLIC_URL+'/img/logo/Logo.svg'}  alt="logo"/>
            </Link>
            </HeaderList>
            <HeaderList>
            <Link to='/coffee/'>Our coffee</Link>
            </HeaderList>
            <HeaderList>
            <Link to='/goods/'>For your pleasure </Link>
            </HeaderList>
        </HeaderBlock>
    );
};

export default Header;