import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'


const AnecdoteForm  = () => {

    const dispatch = useDispatch()
    
    const addanecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notification('A new Anecdote was created',5))
      }
    

    return (
        <form onSubmit={addanecdote}>
          <input name="anecdote" />
          <button type="submit">add</button>
        </form>
      )
}


export default AnecdoteForm 