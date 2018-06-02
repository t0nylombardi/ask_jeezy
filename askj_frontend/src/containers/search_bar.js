import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchJeezy } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchJeezy();
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" 
              placeholder="Ask Jeezy your question"
              value={this.state.term}
              onChange={this.onInputChange} />
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchJeezy }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);