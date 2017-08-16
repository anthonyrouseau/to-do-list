export default function reducer(state = {
  taskGroups: [],
}, action) {

  switch (action.type) {
    case "ADD_TASK_GROUP": {
      return {...state, taskGroups: [...state.taskGroups, {...action.payload}]}
    }

    case "DELETE_TASK_GROUP": {
      return Object.assign({}, state, {
        taskGroups: state.taskGroups.filter((taskGroup) =>
          taskGroup.id !== action.payload.id
        )
      })
    }
    case "SELECT_TASK_GROUP": {
      return {...state, mainView: action.payload.id}
    }
    default:
      return {...state}
  }
}
