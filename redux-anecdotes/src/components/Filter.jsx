import { filterAnecdote } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
      const input_field = event.target.value
      dispatch(filterAnecdote(input_field))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter