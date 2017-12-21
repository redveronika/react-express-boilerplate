const initialState = {
    timeOpen: null,
};

const ADD_TIME_OPEN = 'ADD_TIME_OPEN';

// const addTimeOpen = time => ({ type: ADD_TIME_OPEN, payload: time });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_TIME_OPEN:
        return { ...state, timeOpen: action.payload };
    default:
        return state;
    }
};

export default reducer;
