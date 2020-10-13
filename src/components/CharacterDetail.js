import React from 'react';

export default function CharacterDetail(props){
    if(!props.character){
        return null
    }

    return (
        <div>
            <h3>{props.character.name}</h3>
            <img src={props.character.image} alt =""/>
        </div>

    )
}