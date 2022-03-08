import React, { Component } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PopUpContainer = styled.div`
    display: flex;
    justify-content: center;
`
const PopUp = styled.body`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgb(236, 240, 241, 0.9);
    width: 95%;
    min-height: 80%;
    position: fixed;
    bottom: 15%;
    border-radius: 2%;
`

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const CustomInput = styled(TextField)`
    background-color: white;
    margin: 0 1% 0 1%;
`

class CreatePopUp extends Component {

    handleClick = () => {
        this.props.closePop();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook();
    }

    handleTitleChange = (e) => {
        this.props.onChangeTitle(e.target.value);
    }

    handleAuthorChange = (e) => {
        this.props.onChangeAuthor(e.target.value);
    }

    handlePagesChange = (e) => {
        this.props.onChangePages(e.target.value);
    }

    render() {
        return (
        <PopUpContainer>
            <PopUp>
                <Form onSubmit = {this.handleSubmit} >
                    <Button color = 'error' variant = 'outlined' onClick = {this.handleClick}>X</Button>
                    <CustomInput id="outlined-title" label = 'Title' value = {this.props.title} onChange = {this.handleTitleChange} required/>
                    <CustomInput id="outlined-author" label = 'Author' value = {this.props.author} onChange = {this.handleAuthorChange} />
                    <CustomInput type = 'number' inputProps={{min:0, pattern: '[0-9]'}} id="outlined-pages" label = 'Pages' value = {this.props.pages} onChange = {this.handlePagesChange}/>
                    <Button color = 'secondary' type = 'submit'>Add Book</Button>
                </Form>
            </PopUp>
        </PopUpContainer>
        );
    }
}

export default CreatePopUp;

//make modal background transparent but take up entire page then on transparent bg click use close() JS method