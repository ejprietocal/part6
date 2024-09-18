import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createAnecdote } from "../request"
import { CounterContext } from './Context'



const AnecdoteForm = ({queryClient}) => {

  const [message, messageDispatch] = useContext(CounterContext)

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote, 
    onSuccess: (newAnecdotes) => {      
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdotes))
      messageDispatch({type: 'NEW', message: newAnecdotes})
    },
    onError: (error) =>{
      messageDispatch({type: 'ERROR', message: error.response.data.error })
    }
  })


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
