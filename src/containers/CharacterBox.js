import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import HouseSelector from '../components/HouseSelector';


export default class CharacterBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters:[],
            selectedCharacter: null,
            allCharacters:[]
        };
        this.handleCharacterSelect=this.handleCharacterSelect.bind(this);
        this.handleHouseSelect=this.handleHouseSelect.bind(this);
    }

    componentDidMount(){
        fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => this.setState({characters: data}))
        .catch(err => console.error)
    
    }

    handleCharacterSelect(name){
        const selectedCharacter=this.state.characters.find(character => character.name ===name);
        this.setState({selectedCharacter: selectedCharacter});
    }

    handleHouseSelect(house){
        const selectedCharactersByHouse=this.state.characters.filter(character => character.house ===house);
        this.setState({characters: selectedCharactersByHouse});
    }

    render(){
        return (
        <div>
            <h2>
                Characters
            </h2>
            <HouseSelector onHouseSelect={this.handleHouseSelect} />
            <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelect}/>
            <CharacterDetail character={this.state.selectedCharacter} />
        </div>
        );
    }
}
