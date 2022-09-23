import { ProductContext } from "../context/ProductContext";
import { useContext } from "react"


export const useProductsContext = () => {
  const context = useContext(ProductContext)
  

  return context
}


