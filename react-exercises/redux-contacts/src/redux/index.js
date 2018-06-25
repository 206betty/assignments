const redux = require("redux");

const state = {
    counter: 0
}

    export function addUser(){
    return {
        type: "ADD_USER"
    }
}

export function removeUser(){
    return{
        type: "REMOVE_USER"
    }
}

function reducer(prevState = {contactList [] }, action){
    switch(action.type){
     case "ADD_USER":
        return {
            contactList: [...prevState.contactList, action.contact]
        }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});
