import axios from 'axios';

export const FETCH_BLEACH_START = 'FETCH_BLEACH_START';
export const FETCH_BLEACH_SUCCESS = 'FETCH_BLEACH_SUCCESS';
export const FETCH_BLEACH_FAILURE = 'FETCH_BLEACH_FAILURE';

export const getCharacters = () => dispatch =>{
    dispatch({
        type: FETCH_BLEACH_START
    });
    axios.get('https://api.jikan.moe/v3/anime/269/characters_staff')
    .then(res => dispatch({ type: FETCH_BLEACH_SUCCESS, payload: res.data.characters })
    )
    .catch(error => {
      console.log(error.response);
      dispatch({type: FETCH_BLEACH_FAILURE, payload:`${error.response.status} ${error.response.data}` })
    }) 
};


