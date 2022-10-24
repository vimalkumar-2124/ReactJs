import React from 'react'
import { useDispatch, useTrackedState } from '../store'
import NewTodo from './NewTodo'
import ToDoItem from './ToDoItem'

function ToDoList() {
  const dispatch = useDispatch()
  const state = useTrackedState()
  const setQuery = (event) => {
    dispatch({type:'SET_QUERY', query:event.target.value})
  }
  return(
    <div>
        <ul>
            {
                state.todos.map(({id, title, completed}) => (

                    <ToDoItem key={id} id={id} title={title} completed={completed}/>
                )
                )
            }
            <NewTodo/>
        </ul>
        <div>
        Highlight Query for incomplete items:
        <input value={state.query} onChange={setQuery}/>
        </div>
    </div>
  )
}

export default ToDoList