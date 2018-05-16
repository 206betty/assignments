import React from 'react';
import Pet from './Pets'

const Friend = (props) => {

    const mappedPets = props.pets.map((pet, i) => {
        return (
            <Pet name={pet.name} breed={pet.breed} key={pet.name + i}/>
        )
    })

    return(

        <div>
            <h1>Name: { props.name }</h1>
            <h3>Age: {props.age} </h3>
            <h3> {mappedPets} </h3>
        </div>
    )
}

export default Friend;
