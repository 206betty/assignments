import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getShow = () => {
    return dispatch => {
        axios.get('/shows').then(response => {
            dispatch({
                type: "GET_SHOW",
                show: response.data
            })
        })
    }
}

export const addComment = (newComment, id) => {
    return dispatch => {
        axios.post(`/shows/${id}/${newComment}`).then(response => {
           dispatch(getShow())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addShow = newShow => {
    return dispatch => {
        axios.post('/shows', newShow).then(response => {
            dispatch(getShow())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteShow = id => {
    return dispatch => {
        axios.delete(`/show/${id}`).then(response => {
            dispatch(getShow())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editShow = (id, newShow) => {
    return dispatch => {
        axios.put(`/shows/${id}`, newShow).then(response => {
            dispatch(getShow())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_SHOW":
            return action.show
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))