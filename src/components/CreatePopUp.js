import React, { Component } from 'react';
import styled from 'styled-components';

const PopUp = styled.body`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    opacity: 0.5;
    position: absolute;
    text-align: center;
    top: 5px;
`

const Form = styled.form`
    z-index: 10;

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
                <button onClick = {this.handleClick}>X</button>
                <Form onSubmit = {this.handleSubmit} >
                    <input name = 'title' value = {this.props.title} onChange = {this.handleTitleChange} type="text" placeholder='title'/>
                    <input value = {this.props.author} onChange = {this.handleAuthorChange} type="text" placeholder='author'/>
                    <input value = {this.props.pages} onChange = {this.handlePagesChange} type="number" min= '0' placeholder='pages'/>
                    <button type = 'submit'>Add Book</button>
                </Form>
            </PopUp>
        );
    }
}

export default CreatePopUp;

//make modal background transparent but take up entire page then on transparent bg click use close() JS method