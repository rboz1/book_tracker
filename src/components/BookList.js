import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.li`
    list-style: none;
    padding: 0px;
    margin: 0px;

    display: flex;
    justify-content: center;
`
const Book = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: hsl(235, 19%, 35%);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 90%;
    font-size: 1rem;
    font-weight: 400;
    box-shadow: 0 1px 5px hsl(236, 9%, 61%);;
    border-radius: 5px;
    word-wrap: break-word;
    line-height: 200%;
`


class BookList extends Component {

    handleDelete = (e) => {
        this.props.deleteBook(e);
    }

    render() {
        let bookList = this.props.books.map((book) =>
            <List key = {book.id}>
                <Book id = {book.id}>
                    <li>{book.title}</li>
                    <li>{book.author}</li>
                    <li>{book.pages}</li>
                    <li><button type = 'button' onClick = {() => this.handleDelete(book.id)}>DELETE</button></li>
                </Book>
            </List>
            )
        return (
            <main>{bookList}</main>
        );
    }
}

export default BookList;