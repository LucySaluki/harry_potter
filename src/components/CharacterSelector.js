import React from 'react';

export default function CharacterSelector(props){

    function handleChange(event){
        props.onCharacterSelected(event.target.value);
    }

    const options = props.characters.map(character => {
        return <option value={character.name} key={character.name}>{character.name}</option>
    });
    return (
        <select defaultValue="default" onChange ={handleChange}>
            <option disabled value="default">Choose a character...</option>
            {options}
        </select>
    )

}