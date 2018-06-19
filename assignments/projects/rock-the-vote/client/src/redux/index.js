import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getVote = () => {
  return dispatch => {
    axios.get('/vote').then(response => {
      dispatch({
        type: "GET_VOTE",
        vote: response.data
      })
    })
  }
}

export const addVote = newVote => {
  return dispatch => {
    axios.post('/vote', newVote).then(response => {
      dispatch(getVote())
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteVote = id => {
  return dispatch => {
    axios.delete(`/vote/${id}`).then(response => {
      dispatch(getVote())
    }).catch(err => {
      console.log(err)
    })
  }
}

export const editVote = (id, newVote) => {
  return dispatch => {
    axios.put(`/vote/${id}`, newVote).then(response => {
      dispatch(getVote())
    }).catch(err => {
      console.log(err)
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_VOTE":
      return action.vote
    default: 
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))