import React, { Component } from 'react';
import { connect } from 'react-redux';
// export default class BookDetail extends Component
class BookDetail extends Component {
  // constructor() {
  //
  // }
  render() {
    return (
      <div> Book Detail! </div> //close tag不要写错
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps,BookDetail);
