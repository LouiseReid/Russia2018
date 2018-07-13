import React from 'react';
import GameCard from '../components/GameCard';
import _ from 'lodash';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      currentGame: null,
      round: 1,
      score: 0
    }
    this.setCurrentGame = this.setCurrentGame.bind(this)
    // this.calculateScore = this.calculateScore.bind(this)
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
    this.setState({score: this.state.score + data})
  }

  render(){
    return(
      <React.Fragment>
        <p className="question">Score: {this.state.score}</p>
        <p className="round">Round: {this.state.round}</p>
        <GameCard game={this.state.currentGame} addToScore={(data) => this.calculateScore(data)}/>
      </React.Fragment>
    )
  }
}

export default Main;
