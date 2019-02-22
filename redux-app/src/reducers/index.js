import {SHOW_MODAL} from '../constants/action-types';
import {ADD_ELEMENT} from '../constants/action-types';
import {HANDLE_CHANGE} from '../constants/action-types';



const initialState = {
    modal: false,
    text : '',
    array: []
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                modal: action.bool,
            }
        }

        case HANDLE_CHANGE: {
            return {
                ...state,
                text: action.value
            };
        }

        case ADD_ELEMENT: {
            //return {...state, array: state.array.concat(action.payload)}
            return {
                ...state,
                array: [...state.array, action.element],
            };
        }
    }

    return state;
};


export default rootReducer;
