import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

export const getChakra = () => {
    return dispatch => {
        axios.get("/Chakra").then(response => {
            dispatch({
                type: "GET_CHAKRA",
                chakra: response.data 
            })
        })
    }
}

export const addChakra = newChakra => {
    return dispatch => {
        axios.post("./Chakra", newChakra).then(response => {
            dispatch(getChakra())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteChakra = id => {
    return dispatch => {
        axios.delete(`/Chakra/${id}`).then(response => {
            dispatch(getChakra())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editChakra = (id, newChakra) => {
    return dispatch => {
        axios.put(`/Chakra/${id}`, newChakra).then(response => {
            dispatch(getChakra())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_CHAKRA":
            return action.chakra
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk))