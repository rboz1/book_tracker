import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 1.5rem;
    background-color: #20c1bf;
    border-radius: 50%;
    border: 1px solid #20c1bf;
    color: black;

    &:active{
        background-color: #a7cae3;
        border: 1px solid #a7cae3;
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