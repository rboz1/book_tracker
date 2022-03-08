import React, { Component } from 'react';
import AddButton from './AddButton';
import styled from '@emotion/styled';

const Title = styled.h1`
    color: black;
    padding: 2%;
`

const Heading = styled.header`
    display: grid;
    grid-template-columns: repeat(2,1fr);

    border-bottom: 5px solid #140516;
    border-left: 5px solid #140516;

    margin-bottom: 2%;
`


class Header extends Component{

    render(){
        return (
            <Heading>
                <Title>Books To Read</Title>
                <AddButton popup = {this.props.popup}/>
            </Heading>
            
        );


    }

};

export default Header;