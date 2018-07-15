import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: '',
      away: '',
      modalIsOpen: false
    }
  }

  handleGuess() {
    if (this.props.home === this.state.home && this.props.away === this.state.away) {
      this.props.correctGuess()
      this.setState({home: '', away: '', incorrectGuessCount: 0})
    } else if (this.props.home === this.state.home && this.props.away !== this.state.away) {
      this.setState({
        away: '',
        incorrectGuessCount: this.state.incorrectGuessCount + 1
      })
      this.props.handleGuess()
    } else if (this.props.home !== this.state.home && this.props.away === this.state.away) {
      this.setState({
        home: '',
        incorrectGuessCount: this.state.incorrectGuessCount + 1
      })
      this.props.handleGuess()
    } else {
      this.setState({
        home: '',
        away: '',
        incorrectGuessCount: this.state.incorrectGuessCount + 1
      })
      this.props.handleGuess()
    }
  }

  giveUp() {
    this.openModal()
    this.props.giveUp()
    this.setState({home: '', away: '', incorrectGuessCount: 0})
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <React.Fragment>
        <div className="guess-inputs">
        <input
          type="text"
          placeholder="home team"
          value={this.state.home}
          onChange={event => this.setState({home: event.target.value})}
        />
        <input
          type="text"
          placeholder="away team"
          value={this.state.away}
          onChange={event => this.setState({away: event.target.value})}
        />
        <button
          className="btn btn-guess"
          onClick={() => this.handleGuess()}
          >
          Guess
        </button>
        <button
          className="btn btn-giveUp"
          onClick={() => this.giveUp()}
          >
          Give Up
        </button>
      </div>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={() => this.afterOpenModal}
        onRequestClose={() => this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div className="modal-content">
          <button onClick={() => this.closeModal()}>x</button>
          <p>Correct Game: {this.props.home} vs {this.props.away} </p>
        </div>
      </Modal>
      </React.Fragment>
    )
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default GuessForm
