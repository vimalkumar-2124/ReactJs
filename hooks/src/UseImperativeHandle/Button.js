import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)
    useImperativeHandle(ref, () => ({
        alertToggle(){
            setToggle(!toggle)
        }
    }))

    return <>
    
    <div>
        <button>Button from child</button>
        {toggle && <span>Toggle text from parent</span>}
    </div>
    </>
})
export default Button