import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 1.5rem;
    background-color: violet;
    border-radius: 50%;
    border: 1px solid violet;
    color: black;

    &:hover{
        color: violet;
        background-color: black;
        border: 1px solid black;
    }

    &:active{
        background-color: grey;
        border: 1px solid grey;
    }
`

const AddButton = (props) => {
    return (
        <React.Fragment>
            <Button id = 'addButton' type = 'button' onClick = {props.popup}>+</Button>
        </React.Fragment>
    );
};

export default AddButton;