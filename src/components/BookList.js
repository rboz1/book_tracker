import React, { Component } from 'react';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    handleDelete = (e) => {
        this.props.deleteBook(e);
    }
    
    render() {
        let bookList = this.props.books.map((book) =>
            <React.Fragment>
                <li key = {book.id}>
                {book.title}
                <button type = 'button' onClick = {() => this.handleDelete(book._id)}>DELETE</button>
                </li>
                
            </React.Fragment>
            )
        return (
            <ul>{bookList}</ul>
        );
    }
}

export default BookList;