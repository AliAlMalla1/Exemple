 export const INITIAL_STATE = {
    data: []
  } 

  const Reducer = (state , action) => {
    switch(action.type) {
      case "FETCH_PRODUCT": 
      return {
        data: action.payload
      };

      case "ADD_PRODUCT":
        return{
          data: [action.payload , ...state.data]
        }
      
      case "DELETE_PRODUCT":
      return {
     data:  state.data.filter(product => product.id !== action.payload.id)
      };

      default:
       return state;    
    }
  };

export default Reducer
