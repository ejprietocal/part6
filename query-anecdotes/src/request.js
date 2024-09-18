import axios from 'axios'
const baseUrl = '/api/anecdotes'

const getAnecdotes = async() =>{
    const anecdotes = await axios.get(baseUrl)
    return anecdotes.data
}

const createAnecdote = async(anecdote) => {

    try{
        const response = await axios.post(baseUrl,anecdote)
        return response.data
    }catch (error){
        throw error
    }
}

const updateAnecdote = async updatedAnecdote => {
    const anecdoteUpdated = await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    return anecdoteUpdated.data
}

export {getAnecdotes , createAnecdote , updateAnecdote}