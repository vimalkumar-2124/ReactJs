import React, { useReducer } from 'react'
import Button  from 'react-bootstrap/Button'

function reduce(state, action){
    switch(action.type){
        case 'increment': return {count: state.count+1}
        case 'decrement': return {count: state.count-1}
        case 'reset' : return {count: 0}
        default : return {count: state.count}
    }
}
export default function HooksDemo() {
  const initialValue = {count:0}
  const [state, dispatch] = useReducer(reduce, initialValue)
  return<>
  <div>
    <Button variant='primary' onClick={() => dispatch({type:'decrement'})}>-</Button>
    &nbsp;
    &nbsp;
    <span>{state.count}</span>
    &nbsp;
    &nbsp;
    <Button variant='primary' onClick={() => dispatch({type:'increment'})}>+</Button>
  </div>
  <div>
    <Button variant='success' onClick={() => dispatch({type: 'reset'})}>Reset</Button>
  </div>
  </>
}
