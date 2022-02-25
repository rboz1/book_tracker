import React, { Component } from 'react';

class BookList extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                {this.props.books.map((book) =>
                <li>{book.title}</li>
                )}
            </div>
        );
    }
}

export default BookList;