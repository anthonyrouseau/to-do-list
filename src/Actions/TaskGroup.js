export function addTaskGroup(name) {
  return {
    type: "ADD_TASK_GROUP",
    payload: {
      id: new Date().getTime(),
      name: name,
      tasks: []
    }
  }
}

export function deleteTaskGroup(id) {
  return {
    type: "DELETE_TASK_GROUP",
    payload: {
      id: id
    }
  }
}

export function selectGroup(id, name) {
  return {
    type: "MODIFY_VIEW",
    payload: {
      mainView: id,
      title: name
    }
  }
}
