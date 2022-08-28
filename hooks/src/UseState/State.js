import React,{useState} from 'react'

// Create a virtual DOM and re-render page every time when there is a change in the values
export default function State() {
  const [inputValue, setInputValue] = useState("Vimal")

  let onChange = (e) => {
    const newVlaue = e.target.value
    setInputValue(newVlaue)
  }
  return<>
  <h1>UseState</h1>
  <div>
    <input placeholder='Enter something...' onChange={onChange}/>{' '}
    {inputValue}
  </div>
  
  </>
}
