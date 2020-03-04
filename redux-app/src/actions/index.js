import { ADD_ELEMENT } from '../constants/action-types';
import { SHOW_MODAL } from '../constants/action-types';
import { HANDLE_CHANGE } from '../constants/action-types';

export const addElement = (elementToAdd) => {
    return { type: ADD_ELEMENT, element: elementToAdd };
};

export const showModal = () => {
    return { type: SHOW_MODAL, bool: true };
};

export const handleChange = (content, value) => {
    return { type: HANDLE_CHANGE, [content]: value, name: content };
};
