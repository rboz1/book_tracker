import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddButton from './components/AddButton';
import CreatePopUp from './components/CreatePopUp';
import EditPopUp from './components/EditPopUp';
import Book from './components/Book';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      popup: false,
      edit: false,
      title: '',
      author: '',
      pages: '',
      books: []
    }
  }

  //toggles popup window to add new book
  togglePopUp = () => {
    this.setState({popup: true, edit: false})
  }

  //closes popup window to add new book
  closePopUp = () => {
    this.setState({popup: false, edit: false})
  }

  //toggles edit popup window to edit book information
  toggleEdit = () => {
    this.setState({popup: false, edit: true})
  }

  //onChange event handlers track user form input and save to state
  onChangeTitle = (e) => {
    this.setState({title: e});
  }

  //remove deleted book from state and local storage by accessing book object's id
  onDelete = (e) => {
    let filtered = this.state.books.filter((item) => {return e !== item.id});
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

  editTitle = (e) => {
    console.log(e)

  }

  render() {
    return (
      <div>
        <Header />
        <AddButton popup = {this.togglePopUp}/>
        <BookList books = {this.state.books} deleteBook = {this.onDelete} edit = {this.toggleEdit} editTitle = {this.editTitle}/>
        {this.state.popup ? <CreatePopUp closePop = {this.closePopUp} addBook = {this.addBook} onChangeTitle = {this.onChangeTitle} onChangeId = {this.onChangeId} {...this.state} /> 
        :this.state.edit ? <EditPopUp closePop = {this.closePopUp} {...this.state}/> : null}
      </div>
    );
  }
}

export default App;
