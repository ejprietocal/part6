import { useContext } from 'react'
import { CounterContext } from './Context'

const Notification = () => {

  const [message] = useContext(CounterContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }


  return (
    <div style={style}>
        {message}
    </div>
  )
}

export default Notification
