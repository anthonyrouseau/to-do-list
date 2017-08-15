// import React, { Component } from 'react';
import './MainView.css';
import { connect } from 'react-redux';
import TaskList from '../TaskList/TaskList.js';

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

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList)
