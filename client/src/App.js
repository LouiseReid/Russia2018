import React, { Component } from 'react';
import Main from './containers/Main.js';
import Modal from 'react-modal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true
    }
  }


  closeModal() {
    this.setState({modalIsOpen: false, modalHome: null, modalAway: null});
  }

  render() {
    return (
      <div className="App">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => this.afterOpenModal}
          onRequestClose={() => this.closeModal}
          style={modalStyle}
          >
            <div className="modal-content">
              <button className="btn btn-modal" onClick={() => this.closeModal()}>x</button>
              <p>Enjoy the World Cup?</p>
              <p>Think you can remember the games?</p>
              <p>Test your knowledge based on the game stats.  For each incorrect guess and each hint given you will loose a point.</p>
            </div>
          </Modal>
        <Main />
      </div>
    );
  }
}

const modalStyle = {
  backgroundColor: 'black',
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    backgroundColor: '#ffe34ff0',
    borderColor: 'floralwhite',
    borderWidth: '5px',
    fontFamily: 'Nanum Gothic'
  }
};

export default App;
