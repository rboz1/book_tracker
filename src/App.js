import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddButton from './components/AddButton';
import PopUp from './components/PopUp';
import Book from './components/Book';


class App extends Component {

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
    this.setState({popup: true})
  }

  closePopUp = () => {
    this.setState({popup: !this.state.popup})
  }

  //onChange event handlers track user form input and save to state
  onChangeTitle = (e) => {
    this.setState({title: e});
  }

  //remove deleted book from state and local storage
  onDelete = (e) => {
    let filtered = this.state.books.filter((item) => {return e != item._id});
    this.setState({books: filtered}, () => {this.storeBook(this.state.books)});
  }

  //adds new book to book array in state
  addBook = () => {
    //get newest book fields
    let title = this.state.title;
    let author = this.state.author;
    let pages = this.state.pages;

    //create new book object instance using form data
    let newBook = new Book(title, author, pages);

    //update book array in state with new book and add books to local storage
    this.setState({books: [...this.state.books, newBook]}, () => {this.storeBook(this.state.books)});
  }

  storeBook = (bookList) => {
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  //display any books in already stored in local storage
  componentDidMount(){

    let data = JSON.parse(localStorage.getItem('books'));

    if(localStorage.getItem('books')){
      this.setState({
        books: data
      })
    }else{
      this.setState({books: []})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AddButton popup = {this.togglePopUp}/>
        <BookList books = {this.state.books} deleteBook = {this.onDelete}/>
        {this.state.popup ? <PopUp closePop = {this.closePopUp} addBook = {this.addBook} onChangeTitle = {this.onChangeTitle} {...this.state} /> : null}
      </div>
    );
  }
}

export default App;
