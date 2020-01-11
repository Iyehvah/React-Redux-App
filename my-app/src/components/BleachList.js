import React from 'react';
import { connect } from 'react-redux';

import { getCharacters } from '../actions';

const BleachList = props => {
    const fetchBleach = e => {
        e.preventDefault();
        props.getCharacters();
    };

    return (
        <>
        <h2>Bleach!!</h2>
        <div>
            {props.characters.map(character => (
                <h4 key={character.url}>{character.name}</h4>
            ))}
        </div>
        {props.error && <p>{props.error}</p>}
        <button onClick={fetchBleach}>Fetch Characters!</button>
        </>
    );
};

const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error
});

export default connect(
    mapStateToProps,
     { getCharacters }
)(BleachList);