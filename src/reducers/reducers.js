const colorReducer = (state = '', action) => {
   switch (action.type) {
      case 'ADD':
         return action.color
      default:
         return state
   }
}

export default colorReducer
