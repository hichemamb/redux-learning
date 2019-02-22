import React from 'react';
import './Modal.css';
import {connect} from 'react-redux';
import {addElement} from '../../actions/index';
import {handleChange} from '../../actions/index';
import store from '../../store/index';

const Modal = ({array, text, addElement, handleChange}) => {

    return (
        <div className="Modal">
            <h1>MODAL</h1>
            <input type="text" value={text} onChange={handleChange}/>Abs
            <button onClick={addElement}>Ajouter l'élement au tableau</button>
        </div>
    );
};

const mapStateToProps = state => ({
    array: state.array,
    text: state.text
});

const mapDispatchToProps = dispatch => ({
    addElement: () => dispatch(addElement(store.getState().text)),
    handleChange: (event) => dispatch(handleChange(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);