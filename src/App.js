import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddButton from './components/AddButton';
import PopUp from './components/PopUp';
import Book from './components/Book';


class App extends Component {

  userData;

  constructor(props){
    super(props);

    this.state = {
      popup: false,
      title: '',
      author: '',
      pages: '',
      books: []
    }

  }

  //toggles popup window to add new book
  togglePopUp = () => {
    this.setState({popup: !this.state.popup})
  }

  //onChange event handlers track user form input and save to state
  onChangeTitle = (e) => {
    this.setState({title: e});
  }

  //adds new book to state book list
  addBook = () => {
    //get book fields from state user form input
    let title = this.state.title;
    let author = this.state.author;
    let pages = this.state.pages;

    //create new book object instance using form data
    let newBook = new Book(title, author, pages);

    //update state with new book
    this.setState({books: [...this.state.books, newBook]}, () => {
      console.log(this.state.books);
    });

    //clear form
    document.getElementById('addBookForm').reset();
}

  //save this.state.books to local storage


  render() {
    return (
      <div>
        <Header />
        <AddButton popup = {this.togglePopUp}/>
        <BookList books = {this.state.books}/>
        {this.state.popup ? <PopUp popup = {this.togglePopUp} addBook = {this.addBook} {...this.state} onChangeTitle = {this.onChangeTitle} /> : null}
      </div>
    );
  }
}

export default App;
