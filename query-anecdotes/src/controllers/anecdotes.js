import jsonServer from 'json-server'

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


const validator = (request, response, next) => {
  
    const { content } = request.body
    
    if (!content || content.length<5) {
      return response.status(400).json({
        error: 'too short anecdote, must have length 5 or more'
      })
    } else {
      next()
    }
  }

const getAnecdotes = (request, response, next) =>{
    const query = router.db.get('anecdotes').value()
    return response.json(query)
}


export {router, validator, getAnecdotes, middlewares}

