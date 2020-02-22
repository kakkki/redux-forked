import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodosDummy = (todos, filter) => {
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

const mapDispatchToProops = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProops
)(TodoList)
