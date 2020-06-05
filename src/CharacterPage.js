import React, { Component } from 'react';
import { getCharacters } from './getcharacter';

class CharacterPage extends Component {
    state = {
      characters: []
    }

    componentDidMount() {
      getCharacters()
        .then(characters => this.setState({ characters }));
    }

    render() {
      const characterDetails = this.state.characters.map(character => (
        <li key={character._id}>
          <p>{character.name}</p>
          <p>{character.description}</p>
          <p>{character.level}</p>
        </li>
      ));
      return (
        <ul>
          {characterDetails}
        </ul>
      );
    }
}
