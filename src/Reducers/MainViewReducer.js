export default function reducer(state = {
  mainView: "home",
  title: "Home",
}, action) {

  switch (action.type) {
    case "MODIFY_VIEW": {
      return {...state, ...action.payload}
    }
    case "DELETE_TASK_GROUP": {
      if (state.mainView !== action.payload.id) {
        return {...state}
      }
      return {...state, mainView: "home", title: "Home"}
    }
    default:
      return {...state}
  }
}
