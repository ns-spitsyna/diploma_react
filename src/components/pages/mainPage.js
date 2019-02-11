import React, {Component} from 'react';
import Preview from '../preview';
import About from '../about';
import Best from '../best';
import Footer from '../footer';
import {withRouter} from 'react-router-dom';



class MainPage extends Component{
    render(){
        return(
            <>
            <Preview />
            <About/> 
            <Best/> 
            <Footer/>
            
            </>

        )
    }

}
export default withRouter(MainPage);