import React,{ useRef } from 'react'


// If we want to focus on input box whenever we select button, we have to use UseRef hook
function Ref() {
    const inputRef = useRef(null)
    const onClick = () => {
        inputRef.current.focus() // Auto focus when we select button
        inputRef.current.value = "" // Clear input box after we select button
    }
    return <>
        <h1>UseRef</h1>
        <div>
          <h1>Vimal</h1>
          <input type="text" placeholder="Auto Focus..." ref={inputRef} />
          <button onClick={onClick}>Change Name</button>
        </div>
    </>
    
}

export default Ref