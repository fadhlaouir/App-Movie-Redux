import React, { Component } from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux'
import MovieApp from "./components/MovieApp";
import movieAppStore from './store'


class App extends Component {
  render() {
    return (
      <Provider store={movieAppStore}>
        <MovieApp />
      </Provider>
    );
  }
}

export default App;
