import React from 'react';
import './Home.css';
import Modal from '../modal/Modal';
import {connect} from 'react-redux';
import {showModal} from '../../actions/index';

const Home = ({schoolName, changeSchoolName, modal, showModal}) => {

    const onChange = () => {
        changeSchoolName();
    };

    return (
        <div className="Home">
            <h1 className="Home-title">Salut, bienvenue à <span className="Home-title--crimson">{schoolName}</span></h1>
            <button className="Home-button" onClick={onChange}>Changer le nom</button>
            <button className="Home-button" onClick={showModal}>Ouvrir la modal</button>
            { modal &&
                <Modal/>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {modal: state.modal}
};

const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch(showModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);