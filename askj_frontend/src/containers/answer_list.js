import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerList extends Component {
  renderJeezy(answerData) {
    let answerStr = ''
    if (typeof answerData === "undefined") {
      answerStr = ''
    } else if (typeof answerData === "string") {
      answerStr = answerData.replace(/\"/g, "");
    }
    return (
      <h1 key={answerData}
          className="title answer">
        {answerData}
      </h1>
    );
  }

  render() {
    return (
      <div>
        {this.renderJeezy(this.props.jeezy.verse_text)}
      </div>
  );
  }
}

function mapStateToProps({jeezy}) {
  return { jeezy };
}

export default connect(mapStateToProps)(AnswerList)