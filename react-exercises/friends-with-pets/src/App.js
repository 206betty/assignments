import React from 'react';
import "./Friendslist.js";
import "./Friends.js";
import Friendslist from './Friendslist.js';



const App = () => {
  function sayHello (){
    console.log("hello There")
  }
  const friend = [  
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "tabby"
        },{
          name: "John Johnson",
          breed: "husky"
        },{
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },{
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat"
        },{
          name: "patches",
          breed: "sphynx cat"
        },{
          name: "tiger",
          breed: "sphynx cat"
        },{
          name: "oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ]
    return (
      <div>
        <Friendslist friends={friend} />
        <button></bu
      </div>
    );
  }

export default App;
