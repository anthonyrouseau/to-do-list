export default function reducer(state = {
  tasks: [],
}, action) {

  switch (action.type) {
    case "ADD_TASK": {
      return {...state, tasks: [...state.tasks, {id: action.payload.id, text: action.payload.text, completed: false}] }
    }
    case "TOGGLE_TASK": {
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return Object.assign({}, task, {
              completed: !task.completed
            })
          }
          return task
        })
      })
    }
    case "DELETE_TASK": {
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) =>
          task.id !== action.payload.id
        )
      })
    }
    default:
      return {...state}
  }
}
