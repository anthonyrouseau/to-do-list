import React, { Component } from 'react';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../Task/Task.js';
import AddTask from '../AddTask/AddTask.js';
import DeleteTask from '../DeleteTask/DeleteTask.js';

class TaskList extends Component {
  // takes in a list of Tasks and presents them


  render() {
    // let filteredTasks = this.props.filterTasks(this.props.currentGroup);
    return(
      <div id="main-task-list">
        <AddTask currentGroup={this.props.currentGroup}/>
        <ul>
          {this.props.tasks.map(task => (
            <div key={task.id}>
              <Task {...task} onClick={()=> this.props.onTaskClick(task.id)}/>
              <DeleteTask taskId={task.id}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

TaskList.propTypes = {
  currentGroup: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
}

export default TaskList
