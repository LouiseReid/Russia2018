import React from 'react';
import GuessForm from './GuessForm.js';
import './GameCard.css';


class GameCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roundScore: 10,
      hintsShown: []
    };
  }

  renderHint(){
    let hint = (this.props.game.hints).shift()
    if(!this.state.hintsShown.includes() && hint !== undefined){
      this.setState({hintsShown: [...this.state.hintsShown, hint], roundScore: this.state.roundScore -1 })
    }
  }

  correctGuess(){
    let roundScore = this.state.roundScore
    this.props.addToScore(roundScore)
    const initialState = {
      roundScore: 10,
      hintsShown: []
    }
    this.setState(initialState)
  }

  giveUp(){
    this.setState({roundScore: 0}, () => this.correctGuess())
  }

  handleGuess(){
    this.setState({roundScore: this.state.roundScore - 1})
  }

  render(){
    if(!this.props.game) return null;

    const { round, location, home_team, away_team, home_goals, away_goals, home_tactics, away_tactics, home_yellow, away_yellow, home_red, away_red, home_possession, away_possession, home_attempts, away_attempts, home_fouls, away_fouls, extra_time, penalties } = this.props.game

    const renderedHints = this.state.hintsShown.map((hint, index) => {
        return(
          <li key={index}>{hint}</li>
        )
    })

    return(
      <React.Fragment>
        <div className="game-container">
          <div className="game-info">
            <header className="game-card-header">
              <h3>{round}</h3>
              <h3>{location}</h3>
            </header>
            <div className="game-stats">
              <div className="home-stats">
                <p>Home Team</p>
                <p>{home_goals}</p>
                <p>Attempts: {home_attempts}</p>
                <p>Possession: {home_possession}</p>
                <p>Fouls: {home_fouls}</p>
                <p>Yellow cards: {home_yellow}</p>
                <p>Red cards: {home_red}</p>
                <p>Tactics: {home_tactics}</p>
              </div>
              <div className="game-extras">
                <p>Extra Time: {extra_time ? extra_time : 'false'}</p>
                <p>Penalties: {penalties ? penalties : 'false'}</p>
              </div>
              <div className="away-stats">
                <p>Away Team</p>
                <p>{away_goals}</p>
                <p>Attempts: {away_attempts}</p>
                <p>Possession: {away_possession}</p>
                <p>Fouls: {away_fouls}</p>
                <p>Yellow cards: {away_yellow}</p>
                <p>Red cards: {away_red}</p>
                <p>Tactics: {away_tactics}</p>
              </div>
            </div>
          </div>
          <div className="game-interaction">
            <p>Round Score: {this.state.roundScore}</p>
            <div className="game-hints">
              <button onClick={() => this.renderHint()}>Show Hint</button>
              <p>hints: {renderedHints}</p>
            </div>
            <GuessForm
              home={home_team}
              away={away_team}
              correctGuess={() => this.correctGuess()}
              giveUp={() => this.giveUp()}
              handleGuess={() => this.handleGuess()}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GameCard;
