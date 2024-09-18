import jsonServer from 'json-server'
import { validator, getAnecdotes ,router, middlewares } from './src/controllers/anecdotes.js'

const server = jsonServer.create()
server.use(jsonServer.bodyParser)
server.use(middlewares)


server.post('/api/anecdotes',validator)
server.get('/api/anecdotes',getAnecdotes)
server.use('/api', router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})
