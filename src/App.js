import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import CreatePopUp from './components/CreatePopUp';
import Book from './components/Book';
import Layout from './components/Layout';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      popup: false,
      edit: false,
      id: '',
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

  //closes popup window to add new book or edit book
  closePopUp = () => {
    this.setState({popup: false})
  }

  //onChange event handlers track user form input and save to state
  onChangeTitle = (e) => {
    this.setState({title: e});
  }

  onChangeAuthor = (e) => {

    this.setState({author: e});

  }

  onChangePages = (e) => {
    this.setState({pages: e});
  }

  //remove deleted book from state and local storage by accessing book object's id
  onDelete = (e) => {
    let filtered = this.state.books.filter((book) => {return e !== book.id});
    this.setState({books: filtered}, () => {this.storeBook(this.state.books)});
  }
  //adds new book to book array in state
  addBook = () => {
    //get book fields that user input
    let title = this.state.title;
    let author = this.state.author;
    let pages = this.state.pages;

    //create new book object instance using form data
    let newBook = new Book(title, author, pages);

    //update book array in state with new book, add books to local storage, and clear input form
    this.setState({
      title: '',
      author: '',
      pages: '', 
      books: [...this.state.books, newBook]}, 
      () => {this.storeBook(this.state.books)});
  }

  storeBook = (arr) => {
    localStorage.setItem('books', JSON.stringify(arr));
  }

  //display any books already stored in local storage
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
      <Layout>
        <Header popup = {this.togglePopUp}/>
        <BookList books = {this.state.books} deleteBook = {this.onDelete}/>
        {this.state.popup ? <CreatePopUp closePop = {this.closePopUp} addBook = {this.addBook} onChangeTitle = {this.onChangeTitle} onChangeAuthor = {this.onChangeAuthor} onChangePages = {this.onChangePages}  {...this.state}/> : null}
      </Layout>
    );
  }
}

export default App;
