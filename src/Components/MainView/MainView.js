// import React, { Component } from 'react';
import './MainView.css';
import { connect } from 'react-redux';
import TaskList from '../TaskList/TaskList.js';
import { toggleTask } from '../../Actions/TaskActions.js'

// class MainView extends Component {
//
//   render() {
//     return (
//       <div></div>
//     );
//   }
// }

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList)
