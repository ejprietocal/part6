import { useSelector, useDispatch } from 'react-redux'
import { notification } from '../reducers/notificationReducer'
import { voteNote } from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleClick}) => {

    return(
        <li>
          {anecdote.content} 
          <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
          </div>
        </li>
      )
}

const AnecdoteList  = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.filter === '' ? state.anecdotes : state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase())))
    
    const sortedAnecdotes = [...anecdotes].sort((a,b) =>{
        return b.votes - a.votes
    })

    return(
        <ul className='list-style'>
          {sortedAnecdotes.map(anecdote =>
            // console.log(anecdote.id)
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => 
                dispatch(voteNote(anecdote),
                dispatch(notification(`you voted ${anecdote.content}`, 5))
              )}
            />
          )}
        </ul>
      )
}

export default AnecdoteList 