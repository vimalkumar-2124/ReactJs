import React, { useCallback, useState } from 'react'
import Child from './Child'


// Passing func as props and only render whenever data change on that func..otherwise it shouldn't 
// for that we are using useCallback
function CallBack() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Sample")
    const returnComment = useCallback((name) => {
        return data + name
    },[data])
  return <>
  <h1>UseCallBack</h1>
  <div>
    <Child returnComment={returnComment}/>
    <button onClick={() => {
        setData("Kumar")
        setToggle(!toggle)
    }}>{" "}Toggle</button>
    {toggle && <h1>Toggle</h1>}
  </div>
  </>
}

export default CallBack