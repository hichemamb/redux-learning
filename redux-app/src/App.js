import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        schoolName: "Hetic"
    };

    changeSchoolName = () => {
        this.setState({
            schoolName: "Harvard"
        })
    };

  render() {
    return (
      <div className="App">
          <h1>Salut, bienvenue à {this.state.schoolName}</h1>
          <button onClick={this.changeSchoolName}>Changer le nom</button>
      </div>
    );
  }
}

export default App;
