import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../actions';
import S from 'styled-components';

const Div = S.div`
    color: green;
    text-align: center;
`;

const BleachList = props => {
    const fetchBleach = e => {
        e.preventDefault();
        props.getCharacters();
    };

    return (
        <Div>
        <h2>Here is a list of character of my favorite anime, Bleach!</h2>
        <div>
            {props.characters.map(character => (<div>
                <h4 key={character.url}>{character.name}</h4>
                <img src={`${character.image_url}`}></img>
                </div>
            ))}
        </div>
        {props.error && <p>{props.error}</p>}
        <button onClick={fetchBleach}>Fetch Characters!</button>
        </Div>
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