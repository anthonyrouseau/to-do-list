import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {

  // onClick, function passed from TaskContainer
  // text, task text
  // completed, bool

  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

// Task.defaultProps = {
//   text : ""
// }

Task.propTypes = {
  text: PropTypes.string.isRequired
}

export default Task
