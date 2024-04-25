import React, { useContext, useState } from 'react'
import { createContext } from 'react';


export const MyContext = createContext("")
export const useContextHook = ()=> useContext(MyContext)
// const {Provider}= MyContext


//it's a component that goes around to share our context
// provider helps us to share the data that's in the context

const AppContext = ({children}) => {
    const [user, setUser]= useState({
        fName: "",
        lName: '',
        email: "",
    })

    const greeting = "Welcome home"
  return (
    <div>
        <MyContext.Provider value={{user, setUser}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default AppContext