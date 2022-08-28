import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'


// To avoid props drilling on the multiple components, we can create one Context and pass to the components
// Context is a collection of states which can wrap around components, so that components can access the states
export const AppContext = createContext(null)
function Context() {
    const [userName, setUserName] = useState("")
  return<>
    <h1>UseContext</h1>
    <AppContext.Provider value={{userName, setUserName}}>
   <Login />
   <User /> 
   </AppContext.Provider>
  </>
  
}

export default Context