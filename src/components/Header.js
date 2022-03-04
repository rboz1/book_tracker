import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    background-color: #2e3e61;
    color: black;
    padding: 2%;
`

const Header = () => {
    return (
        <Title>Books To Read</Title>
    );
};

export default Header;