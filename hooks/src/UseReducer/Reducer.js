import React, {useReducer} from 'react'

// UseReducer use to update the state for multiple variables.

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count : state.count + 1, showText : state.showText}
        case "toggleShowText":
            return {count : state.count, showText : !state.showText}
        default:
            return state
    }
}
function Reducer() {
    const [state, dispatch] = useReducer(reducer, {count :0, showText: true})
  return <>
  <h1>UseReducer</h1>
  <div>
    <h1>{state.count}</h1>
    <button onClick={() => {
        dispatch({type : "INCREMENT"})
        dispatch({type : "toggleShowText"})
    }}>Click Here</button>
    {state.showText && <p>Toggle text</p>}
  </div>
  </>
}

export default Reducer