import React, { Component } from 'react';

class PopUp extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.popup();
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>X</button>
                <p>I'm a popup!</p>
                
            </div>
        );
    }
}

export default PopUp;