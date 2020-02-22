import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTodoDummy from '../containers/AddTodoDummy'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleTodoListDummy from '../containers/VisibleTodoListDummy'

const App = () => (
  <div>
    <AddTodo />
    <AddTodoDummy />
    <VisibleTodoList />
    <Footer />
    <VisibleTodoListDummy />
  </div>
)

export default App
