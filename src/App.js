import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddButton from './components/AddButton';
import PopUp from './components/PopUp';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      popup: false
    }

    this.togglePopUp = this.togglePopUp.bind(this);
  }

  togglePopUp(){
    this.setState({popup: !this.state.popup})
  }

  render() {
    return (
      <div>
        <Header />
        <AddButton popup = {this.togglePopUp}/>
        <BookList />
        {this.state.popup ? <PopUp popup = {this.togglePopUp}/> : null}
      </div>
    );
  }
}

export default App;
