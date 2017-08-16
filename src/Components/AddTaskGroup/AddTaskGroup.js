import React, { Component } from 'react';

class AddTaskGroup extends Component {
  render() {
    let input
    return (
      <div>
        <form onSubmit= {e => {
            e.preventDefault()
            if (!input.value.trim()) {
              input.value = '';
              return
            }
            this.props.addGroup(input.value);
            input.value = '';
            return
        }}
        >
          <input ref={node => {
              input = node
          }}
          />
          <button type="submit">
            Add Task Group
          </button>
        </form>
      </div>
    )
  }
}

export default AddTaskGroup
