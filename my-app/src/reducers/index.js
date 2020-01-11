import {
    FETCH_BLEACH_START,
    FETCH_BLEACH_SUCCESS,
    FETCH_BLEACH_FAILURE
} from '../actions';

const initialState = {
    characters: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_BLEACH_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_BLEACH_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                characters: action.payload
            };
        case FETCH_BLEACH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFeatching: false
            }
        default: 
            return state;
    }
}

export default reducer;