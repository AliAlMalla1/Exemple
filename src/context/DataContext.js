 import { createContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";

 
export const DataContext = createContext()

 export const DataContextProvider = ({children}) => {
  const [state , dispatch] = useReducer(DataReducer , {
   
    data: null
  })

  return(
    <DataContext.Provider value={{...state , dispatch}}>
        {children}
    </DataContext.Provider>
  )

 }


 