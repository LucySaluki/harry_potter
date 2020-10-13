import React from 'react';

export default function HouseSelector(props){

    function handleChange(event){
        props.onHouseSelect(event.target.value);
    }

    return (
        <select defaultValue="default" onChange ={handleChange}> 
            <option disabled value="default">Choose a house...</option>
            <option  value="Gryffindor">Gryffindor</option>
            <option  value="Slytherin">Slytherin</option>
            <option  value="Ravenclaw">Ravenclaw</option>
            <option  value="Hufflepuff">Hufflepuff</option>
        </select>
    )

}