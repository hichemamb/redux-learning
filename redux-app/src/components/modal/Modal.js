import React from 'react';
import './Modal.css';
import {connect} from 'react-redux';
import {addElement} from '../../actions/index';
import {handleChange} from '../../actions/index';
import store from '../../store/index';

const Modal = ({array, text, text2, addElement, handleChange}) => {

    return (
        <div className="Modal">
            <h1 className="Home-title">List</h1>
            <div className="Modal-control">
                <input className='Modal-input' type="text" name="text" value={text} onChange={handleChange}/>
                <input className='Modal-input' type="text" name="text2" value={text2} onChange={handleChange}/>
                <button className='Modal-button' onClick={addElement}>Ajouter l'élement au tableau</button>
            </div>
            <ul className="Modal-list">
                {array.map(element => <li className="Modal-list__item">🌲{element}</li>)}
            </ul>
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    array: state.array,
    text: state.text,
    text2: state.text2
});

const mapDispatchToProps = dispatch => ({
    addElement: () => dispatch(addElement(store.getState().text)),
    handleChange: (event) => dispatch(handleChange(event.target.name, event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);