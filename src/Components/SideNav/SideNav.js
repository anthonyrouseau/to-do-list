import React, { Component } from 'react';
import './SideView.css';
import AddTaskGroup from '../AddTaskGroup/AddTaskGroup.js';
import { connect } from 'react-redux';
import TaskGroupList from '../TaskGroupList/TaskGroupList.js';
import * as TaskGroupActions from '../../Actions/TaskGroup.js';

class SideNav extends Component {
  render() {
    return(
      <div id="side-nav">
        <AddTaskGroup addGroup={(name) => this.props.addGroup(name)}/>
        <TaskGroupList taskGroups={this.props.taskGroups} selectGroup={(groupId,groupName) => this.props.selectGroup(groupId, groupName) }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    taskGroups: state.taskGroupReducer.taskGroups
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGroup: (name) => {
      dispatch(TaskGroupActions.addTaskGroup(name))
    },
    selectGroup: (groupId,groupName) => {
      dispatch(TaskGroupActions.selectGroup(groupId,groupName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
