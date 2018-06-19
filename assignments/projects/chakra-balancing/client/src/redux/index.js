import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getProgress = () => {
    return dispatch => {
        axios.get('/chakra').then(response => {
            dispatch({
                type: "GET_PROGRESS",
                progress: response.data
            })
        })
    }
}

export const addComment = (id, newComment) => {
    return dispatch => {
        axios.post(`/chakra/${id}`, newComment).then(response => {
           dispatch(getProgress())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addProgress = newProgress => {
    return dispatch => {
        axios.post('/chakra', newProgress).then(response => {
            dispatch(getProgress())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteProgress = id => {
    return dispatch => {
        axios.delete(`/chakra/${id}`).then(response => {
            dispatch(getProgress())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editProgress = (id, newProgress) => {
    return dispatch => {
        axios.put(`/chakra/${id}`, newProgress).then(response => {
            dispatch(getProgress())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PROGRESS":
            return action.progress
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))