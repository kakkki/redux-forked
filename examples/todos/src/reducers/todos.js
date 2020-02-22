const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'ADD_TODO_DUMMY':
      return [
        ...state,
        {
          dummyTodoId: action.dummyTodoId,
          text: action.text + ' : dummy',
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'TOGGLE_TODO_DUMMY':
      return state.map(todo =>
        (todo.dummyTodoId === action.dummyTodoId)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      default:
      return state
  }
}

export default todos
