import { DataContext } from "../context/DataContext";
import { useContext } from "react"


export const useDataContext = () => {
  const context = useContext(DataContext)
  

  return context
}


