import React, { Component } from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task.js';
import AddTask from '../AddTask/AddTask.js';

class TaskList extends Component {
  // takes in a list of Tasks and presents them

  render() {
    return(
      <div>
        <AddTask />
        <ul>
          {this.props.tasks.map(task => (
            <Task key={task} text={task}/>
          ))}
        </ul>
      </div>
    );
  }
}

// TaskList.defaultProps = {
//   tasks : []
// }

// TaskList.propTypes = {
//   tasks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
// }

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default TaskList
