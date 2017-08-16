import React, { Component } from 'react';
import './TaskGroupList.css';
import PropTypes from 'prop-types';
import TaskGroup from '../TaskGroup/TaskGroup.js';
import DeleteTaskGroup from '../DeleteTaskGroup/DeleteTaskGroup.js';

class TaskGroupList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.taskGroups.map(taskGroup => (
            <div key={taskGroup.id}>
              <TaskGroup {...taskGroup} onClick={() => this.props.selectGroup(taskGroup.id, taskGroup.name)}/>
              <DeleteTaskGroup taskGroupId={taskGroup.id}/>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default TaskGroupList


TaskGroupList.propTypes = {
  taskGroups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
