export default function reducer(state = {
  tasks: [],
}, action) {

  switch (action.type) {
    case "ADD_TASK": {
      return {...state, tasks: [...state.tasks, action.payload.text] }
    }
    default:
      return {...state}
  }
}
