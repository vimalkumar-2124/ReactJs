import React from 'react'
import { useDispatch, useTrackedState } from '../store'
import { useFlash } from '../utils/useFlash'

const renderHighlight = (title, query) =>{
    if (!query) return title
    const index = title.indexOf(query)
    if (index === -1) return title
    return <>
        {title.slice(0, index)}
        <strong>{query}</strong>
        {title.slice(index+query.length)}
    </>
}

function ToDoItem({id, title, completed}) {
    const dispatch = useDispatch()
    const state = useTrackedState()
    const delTodo = () =>{
        dispatch({type:'DELETE_TODO', id})
    }

  return (
    <li ref={useFlash()}>
        <input
         type="checkbox"
         checked={!!completed}
         onChange={() => dispatch({type:'TOGGLE_TODO', id})}
         />
         <span style={{ textDecoration : completed ? 'line-through' : 'none'}}>
            {completed ? title : renderHighlight(title, state.query)}
         </span>
         <button onClick={delTodo}>Delete</button>
    </li>
  )
}

export default React.memo(ToDoItem)