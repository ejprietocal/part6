import { useSelector } from 'react-redux'


const Notification = () => {

  const notification = useSelector(state => state.notification)
  const style = {
    border: notification.border,
    padding: 10,
    borderWidth: notification.borderWidth
  }

  return (
    <div style={style}>
      {notification.content}
    </div>
  )
}

export default Notification