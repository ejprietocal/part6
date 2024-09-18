import { createContext } from 'react'

const notificationReducer = (state, action) =>{
    switch (action.type){
        case "VOTE":
            return `${action.message.content} voted!`
        case "NEW":
            return `${action.message} Added!`
        case "ERROR":
            return `${action.message}`
        default:
            return state
    }

}

const CounterContext = createContext()


export  {CounterContext, notificationReducer}