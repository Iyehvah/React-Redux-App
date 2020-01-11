import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../actions';
import S from 'styled-components';

const Div = S.div`
    color: green;
    text-align: center;
`;

const Button = S.button`
    color: green;
    background-color: black;
    width: 100px;
    height: 50px;
    cursor: pointer;
`;

const BleachList = props => {
    const fetchBleach = e => {
        e.preventDefault();
        props.getCharacters();
    };

    return (
        <Div>
        <h2>Here is a list of character from my favorite anime, Bleach!</h2>
        <Button onClick={fetchBleach}>Fetch Characters!</Button>
        <div className="mainbox">
            {props.characters.map(character => (
                <div className="box">
                    <h4 key={character.url}>{character.name}</h4>
                    <img className="images" src={`${character.image_url}`}></img>
            </div>
            ))}
        </div>
        {props.error && <p>{props.error}</p>}
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