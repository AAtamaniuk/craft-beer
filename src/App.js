import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';

import Header from './components/Header';

import Favorites from './components/Favorites';
import Catalog from './components/Catalog';

const API = 'https://api.punkapi.com/v2/beers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({beers: data}));
  }

  render() {
    const {beers} = this.state;
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/catalog" render={props => (<Catalog beers={beers} {...props}/>)}/>
        <Route path="/favorites" component={Favorites}/>
      </div>
    );
  }
}

export default App;
