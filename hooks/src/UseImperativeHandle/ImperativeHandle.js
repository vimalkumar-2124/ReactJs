import React, { useRef } from 'react'
import Button from './Button'


// To alter the state of child components, we can use useimperative and useref
// We can alter the state of child components from the parent component
function ImperativeHandle() {
  const buttonRef = useRef(null)
  return<>
  <h1>UseImperativeHandle</h1>
  <div>
    <button onClick={() => {
        buttonRef.current.alertToggle()
    }}>
        Button From parent
    </button>
    <Button ref={buttonRef}/>
  </div>
  </>
}

export default ImperativeHandle