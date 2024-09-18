const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTERING_NOTE':
          return action.payload.word
        default:
          return state      
      }
}

export const filterAnecdote = (inputValue) =>{

    return {
        type: 'FILTERING_NOTE',
        payload: {
            word: inputValue
        }
    }
}
  

export default filterReducer