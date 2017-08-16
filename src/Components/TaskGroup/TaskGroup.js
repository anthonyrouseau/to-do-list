import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskGroup.css';

class TaskGroup extends Component {

  render() {
    return (
      <li onClick={this.props.onClick}>
        {this.props.name}
      </li>
    )
  }
}

TaskGroup.defaultProps = {
  id: 0,
  name: "",
  tasks: []
}

TaskGroup.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
}


export default TaskGroup
