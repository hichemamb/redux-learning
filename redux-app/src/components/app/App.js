import React, { Component } from 'react';
import './App.css';
import Home from '../home/Home';

class App extends Component {
    state = {
        schoolName: 'Hetic',
    };

    changeSchoolName = () => {
        this.setState({
            schoolName: 'Polytechnique',
        });
    };

    render() {
        return (
            <div className="App">
                <Home
                    schoolName={this.state.schoolName}
                    changeSchoolName={this.changeSchoolName}
                />
            </div>
        );
    }
}

export default App;
