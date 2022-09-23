 const ProductReducer = (state , action) => {
    switch(action.type) {
      case "FETCH_PRODUCT": 
      return {
        products : action.payload
      };
  
      case "ADD_PRODUCT":
        return{
          products:  [...state.products,action.payload ]
        };
  
        case 'UPDATE_PRODUCT':
          const updateProduct = action.payload;
    
          const updateProducts = state.products.map(product => {
            if (product.id === updateProduct.id) {
              return updateProduct;
            }
            return product;
          })
          return {            
            products: updateProducts
          }
      case "DELETE_PRODUCT":
      return {
     products:  state.products.filter(product => product.id !== action.payload.id)
      };
  
      default:
       return state;    
    }
  };


  export default ProductReducer