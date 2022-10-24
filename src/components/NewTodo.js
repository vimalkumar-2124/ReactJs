
import React, { useState } from 'react'
import { useDispatch } from '../store'
import { useFlash } from '../utils/useFlash'
function NewTodo() {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const addTodo = () => {
        dispatch({type:'ADD_TODO', title:text})
        setText("")
    }
  return (
    <div>
        <li ref={useFlash()} >
            <input value={text} placeholder="Enter title..." onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </li>
    </div>
  )
}

export default React.memo(NewTodo)