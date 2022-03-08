import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)`
    font-size: 200%;
    border-radius: 50%;
    margin: 0 2% 2% 0;

    justify-self: end;
    align-self: center;

`


const AddButton = (props) => {
    return (
        <React.Fragment>
            <CustomButton size = 'small' color = 'secondary' variant = 'contained' id = 'addButton' onClick = {props.popup}>+</CustomButton>
        </React.Fragment>
    );
};

export default AddButton;