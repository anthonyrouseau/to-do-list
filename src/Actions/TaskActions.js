export function addTask(text) {
  return {
    type: "ADD_TASK",
    payload: {
      text: text,
      id: new Date().getTime(),
    }
  }
}

export function toggleTask(id) {
  return {
    type: "TOGGLE_TASK",
    payload: {
      id: id,
    }
  }
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: {
      id: id
    }
  }
}
