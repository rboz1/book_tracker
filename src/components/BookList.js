import React, { Component } from 'react';

class BookList extends Component {

    handleEdit = (e) => {
        this.props.edit(e);
    }

    handleDelete = (e) => {
        this.props.deleteBook(e);
    }

    render() {
        let bookList = this.props.books.map((book) =>
            <React.Fragment key = {book.id}>
                
                <li>
                    <div onClick = {() => this.handleEdit(book.id)}>{book.title}</div>
                    <button type = 'button' onClick = {() => this.handleDelete(book.id)}>DELETE</button>
                </li>
            </React.Fragment>
            )
        return (
            <ul>{bookList}</ul>
        );
    }
}

export default BookList;