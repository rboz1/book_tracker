import React, { Component } from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const List = styled.li`
    list-style: none;
    padding: 0px;
    margin: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    box-shadow: 0 1px 2px hsl(236, 9%, 61%);
`
const Book = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: hsl(235, 19%, 35%);

    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 2%;

    width: 90%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 200%;
`

const ListItem = styled.li`
    place-self: center;
    padding: 2%;
    font-size: 1.1rem;
    flex-shrink: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
`

class BookList extends Component {

    handleDelete = (e) => {
        this.props.deleteBook(e);
    }

    render() {
        let bookList = this.props.books.map((book) =>
            <List key = {book.id}>
                <Book id = {book.id}>
                    <ListItem>{book.title}</ListItem>
                    <ListItem>by: {book.author}</ListItem>
                    <ListItem>{book.pages} pages</ListItem>
                </Book>
                <IconButton  size = 'small' onClick = {() => this.handleDelete(book.id)} aria-label="delete"><DeleteIcon /></IconButton>
            </List>
            )
        return (
            <main>{bookList}</main>
        );
    }
}

export default BookList;