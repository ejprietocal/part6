import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useReducer } from 'react'
import { getAnecdotes, updateAnecdote } from './request'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {CounterContext, notificationReducer} from './components/Context'

const App = () => {

  const [message, messageDispatch] = useReducer(notificationReducer, '')

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote, 
    onSuccess: (newAnecdotes) => {      
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.map(anec => anec.id === newAnecdotes.id ? newAnecdotes : anec ))
    },
  })
  
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1,
    refetchOnWindowFocus: false
  }) 
  
  const handleVote = (anecdote) => {
    const votes = anecdote.votes +1;
    newAnecdoteMutation.mutate({...anecdote, votes})
  }

  const Button = ({ dispatch, label, handleVote }) => {
    return (
      <button onClick={()=> {
            handleVote()
            dispatch()
      }}>
        {label}
      </button>
    )
  }

  
  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <span>anecdote service not availalbe due to problems in server</span>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <CounterContext.Provider value={[message, messageDispatch]}>
        <Notification />
        <AnecdoteForm queryClient={queryClient} />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <Button handleVote={() => handleVote(anecdote)} label='vote' dispatch={() => messageDispatch({type: 'VOTE', message: anecdote}) }/>
            </div>
          </div>
        )}
      </CounterContext.Provider>
    </div>
  )
}

export default App
