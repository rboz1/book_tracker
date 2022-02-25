import React, { Component } from 'react';

class PopUp extends Component {
    handleClick = () => {
        this.props.popup();
    }

    handleSubmit = () => {
        this.props.addBook();
    }

    handleTitleChange = (e) => {
        this.props.onChangeTitle(e.target.value);
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>X</button>
                <form id = 'addBookForm'>
                    <input name = 'title' value = {this.props.title} onChange = {this.handleTitleChange} type="text" placeholder='title'/>
                    {/* <input value = {this.props.author} onChange = {this.handleAuthorChange} type="text" placeholder='author'/>
                    <input value = {this.props.pages} onChange = {this.handlePagesChange} type="number" min= '0' placeholder='pages'/> */}
                    <button type = 'button' onClick = {this.handleSubmit}>Add Book</button>
                </form>
                
            </div>
        );
    }
}

export default PopUp;