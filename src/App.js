import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import BeerGrid from './components/BeerGrid';

const API = 'https://api.punkapi.com/v2/beers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      isLoading: false
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ beers: data }))
  }

  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        <Header />
        <BeerGrid beers={beers} />
      </div>
    );
  }
}

export default App;
