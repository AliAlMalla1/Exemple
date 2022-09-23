 import { createContext, useReducer } from "react";
import ProductReducer from "../components/reducer/ProductReducer";
 
export const ProductContext = createContext()

 export const ProductContextProvider = ({children}) => {
  const [state , dispatch] = useReducer(ProductReducer , {
    products: null
  })

  return(
    <ProductContext.Provider value={{...state , dispatch}}>
        {children}
    </ProductContext.Provider>
  )

 }


 