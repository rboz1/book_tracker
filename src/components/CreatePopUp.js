import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>X</button>
                <form onSubmit = {this.handleSubmit} >
                    <input name = 'title' value = {this.props.title} onChange = {this.handleTitleChange} type="text" placeholder='title'/>
                    {/* <input value = {this.props.author} onChange = {this.handleAuthorChange} type="text" placeholder='author'/>
                    <input value = {this.props.pages} onChange = {this.handlePagesChange} type="number" min= '0' placeholder='pages'/> */}
                    <button type = 'submit'>Add Book</button>
                </form>
            </div>
        );
    }
}

export default CreatePopUp;

//make modal background transparent but take up entire page then on transparent bg click use close() JS method