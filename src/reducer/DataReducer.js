

const DataReducer = (state , action) => {
    switch(action.type) {
      case "FETCH_DATA": 
      return {
        data : action.payload
      };
  

      case "FETCH_SINGLE_DATA": 
      return {
        data : action.payload.id
      };
  

    
  
      case "ADD_DATA":
        return{
          data:  [...state.data,action.payload ]
        };
  
        case 'UPDATE_DATA':
          const updateDATA = action.payload;
    
          const updatedata = state.data.map(DATA => {
            if (DATA.id === updateDATA.id) {
              return updateDATA;
            }
            return DATA;
          })
          return {
            
            data: updatedata
          }
      case "DELETE_DATA":
      return {
     data:  state.data.filter(DATA => DATA.id !== action.payload.id)
      };

     
       

      default:
       return state;    
    }
  };

  export default DataReducer