import React, { Component } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PopUp = styled.body`
    position: absolute;
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
            <PopUp>
                <Button color = 'error' variant = 'outlined' onClick = {this.handleClick}>X</Button>
                <form onSubmit = {this.handleSubmit} >
                    <TextField id="outlined-title" label = 'Title' value = {this.props.title} onChange = {this.handleTitleChange} required/>
                    <TextField id="outlined-author" label = 'Author' value = {this.props.author} onChange = {this.handleAuthorChange} />
                    <TextField type = 'number' inputProps={{min:0, pattern: '[0-9]'}} id="outlined-pages" label = 'Pages' value = {this.props.pages} onChange = {this.handlePagesChange}/>
                    <Button color = 'secondary' type = 'submit'>Add Book</Button>
                </form>
            </PopUp>
        );
    }
}

export default CreatePopUp;

//make modal background transparent but take up entire page then on transparent bg click use close() JS method