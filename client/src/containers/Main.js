import React from 'react';
import GameCard from '../components/GameCard';
import GameEnd from '../components/GameEnd';
import Modal from 'react-modal';
import './Main.css';
import _ from 'lodash';

Modal.setAppElement('#root')

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      currentGame: null,
      round: 1,
      roundScore: 0,
      score: 0,
      modalIsOpen: false,
      modalHome: null,
      modalAway: null
    }
    this.setCurrentGame = this.setCurrentGame.bind(this)
  }

  componentDidMount(){
    fetch('/api/games')
    .then(res => res.json())
    .then(games => this.setState({ games }, this.setCurrentGame))
  }

  setCurrentGame(){
    let shuffled = _.shuffle(this.state.games)
    let currentGame = shuffled.shift()
    this.setState({games: shuffled, currentGame})
  }

  calculateScore(data){
    this.setState({score: this.state.score + data, round: this.state.round + 1})
    this.setCurrentGame()
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false, modalHome: null, modalAway: null});
  }

  showAnswer(g1, g2, roundScore){
    this.setState({modalHome: g1, modalAway: g2, modalIsOpen: true})
  }

  render(){

    if(this.state.currentGame === undefined && this.state.modalHome === null){
      return (
        <div className="end-container">
          <GameEnd finalScore={this.state.score}/>
        </div>
      );
    } else {
      return(
        <div className="main-container">
          <div className="round-info">
            <p className="round">Round: {this.state.round}/10</p>
            <p className="question">Score: {this.state.score}</p>
          </div>
          <GameCard
            game={this.state.currentGame}
            addToScore={(data) => this.calculateScore(data)}
            showAnswer={(game1, game2) => this.showAnswer(game1, game2)}
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={() => this.afterOpenModal}
            onRequestClose={() => this.closeModal}
            style={modalStyle}
            >
              <div className="modal-content">
                <button className="btn btn-modal" onClick={() => this.closeModal()}>x</button>
                <p>Correct Game: {this.state.modalHome} vs {this.state.modalAway} </p>
                <p>Round Score: {this.state.roundScore}</p>
              </div>
            </Modal>
          </div>
        )
      }
    }
  }

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      backgroundColor: 'floralwhite',
      fontFamily: 'Nanum Gothic'
    }
  };

  export default Main;
