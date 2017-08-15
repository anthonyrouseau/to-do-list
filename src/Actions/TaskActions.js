export function addTask(text) {
  return {
    type: "ADD_TASK",
    payload: {
      text: text,
    }
  }
}
