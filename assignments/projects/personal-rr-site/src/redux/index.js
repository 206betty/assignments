import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    data: {
        quoteText: '',
        quoteAuthor: ''
    }
}

export const getData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en').then(response => {
            dispatch({
                type: "GET_DATA",
                data: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_DATA":
            return {
                data: action.data
            }
        default:
            return state    
    }
}

 const store = createStore(reducer, applyMiddleware(thunk))

 export default store;