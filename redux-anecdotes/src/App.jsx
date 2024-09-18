import { useEffect } from "react"
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm  from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import { initialAnecdotes } from "./reducers/anecdoteReducer"
import {useDispatch} from 'react-redux'

const App = () => {

  const disPatch = useDispatch()
  useEffect(() => {
      disPatch(initialAnecdotes())
  }, [])


  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm  />
    </>
  )
}

export default App