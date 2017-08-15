import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {

  // onClick, function passed from TaskContainer
  // text, task text
  // completed, bool

  render() {
    return (
      <li onClick={this.props.onClick} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        {this.props.text}
      </li>
    );
  }
}

Task.defaultProps = {
  id: 0,
  text : "",
  completed: false,
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Task
