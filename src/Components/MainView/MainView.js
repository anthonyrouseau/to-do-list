import React, { Component } from 'react';
import './MainView.css';
import { connect } from 'react-redux';
import TaskList from '../TaskList/TaskList.js';
import { toggleTask } from '../../Actions/Task.js';
// import { getGroupTasks } from '../../Actions/TaskGroup.js';

class MainView extends Component {

  render() {
    let currentView
    if (this.props.currentGroup === 'home') {
      currentView = <div> we are home</div>
    } else {
      currentView = <TaskList currentGroup={this.props.currentGroup} tasks={this.props.tasks}  onTaskClick={(id) => this.props.onTaskClick(id)}/>
    }
    return (
      <div id="main-view">
        <h1>{this.props.title}</h1>
        {currentView}
      </div>
    );
  }
}


const filterTasks = (tasks, groupId) => {
  let filtered = tasks.filter((task) =>
      task.taskGroup === groupId
  )
  return filtered
}

const mapStateToProps = state => {
  return {
    tasks: filterTasks(state.taskReducer.tasks, state.mainViewReducer.mainView),
    // tasks: getGroupTasks(state.mainViewReducer.mainView),
    //id of currently selected taskgroup
    currentGroup: state.mainViewReducer.mainView,
    //name of currently selected taskgroup
    title: state.mainViewReducer.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
    },
    // getTasks: id => {
    //   dispatch(getGroupTasks(id))
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainView)
