import { connect } from 'react-redux'
import { toggleTodoDummy } from '../actions'
import TodoListDummy from "../components/TodoListDummy";
import { VisibilityFilters } from "../actions";

const filterDummyTodoList = (todoList) => {
    return todoList.filter(item => {
      return ('dummyTodoId' in item ? true : false)
    })
  }

const getVisibleTodosDummy = (todos, filter) => {
    todos = filterDummyTodoList(todos)
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodosDummy(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodoDummy: dummyTodoId => dispatch(toggleTodoDummy(dummyTodoId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListDummy)
