import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTodoDummy from '../containers/AddTodoDummy'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <AddTodoDummy />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
