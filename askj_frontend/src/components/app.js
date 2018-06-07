import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import AnswerList from '../containers/answer_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AnswerList />
      </div>
    );
  }
}
