import React, { Component } from 'react';

class EditPopUp extends Component {

    handleClick = () => {
        this.props.closePop();
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>X</button>
                <form onSubmit = {this.handleSubmit}>
                    <input name = 'title' value = {this.props.title} onClick = {this.handleClick} type="text" placeholder='title'/>
                    {/* <input value = {this.props.author} onChange = {this.handleAuthorChange} type="text" placeholder='author'/>
                    <input value = {this.props.pages} onChange = {this.handlePagesChange} type="number" min= '0' placeholder='pages'/> */}
                    <button type = 'submit'>Save Book</button>
                </form>
            </div>
        );
    }
}

export default EditPopUp;

//make modal background transparent but take up entire page then on transparent bg click use close() JS method