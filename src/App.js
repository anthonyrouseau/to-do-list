import React, { Component } from 'react';
import './App.css';
import MainView from './Components/MainView/MainView.js';
import SideNav from './Components/SideNav/SideNav.js';

class App extends Component {

  render() {
    return (
      <div className="app-layout">
        <div id="header"></div>
        <MainView id="main-view" tasks={this.props.tasks}/>
        <SideNav id="side-nav" />
      </div>
    );
  }
}

// export default connect((store) => {
//   return {
//     tasks: store.tasks.tasks,
//   };
// })(App);
export default App;
