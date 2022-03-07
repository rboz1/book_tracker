import React, { Component } from 'react';
import AddButton from './AddButton';
import styled from '@emotion/styled';


const Title = styled.h1`
    border-bottom: 5px solid #140516;
    border-left: 5px solid #140516;
    color: black;
    padding: 2%;
`

class Header extends Component{

    render(){
        return (
            <header>
                <Title>Books To Read</Title>
                <AddButton popup = {this.props.popup}/>
            </header>
            
        );


    }

};

export default Header;