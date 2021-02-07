import React from 'react'
import {createGlobalStyle} from 'styled-components'
import TodoCreate from './components/TodoCreate'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

import TodoPresenter from './components/TodoPresenter'
import {TodoProvider} from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

const App = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoPresenter>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoPresenter>
    </TodoProvider>
  )
}

export default App
