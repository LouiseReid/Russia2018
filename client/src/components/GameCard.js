import React from 'react';

class GameCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roundScore: 5
    }
  }



  render(){
    if(!this.props.game) return null;

    const { round, location, home_team, away_team, home_goals, away_goals, home_tactics, away_tactics, home_yellow, away_yellow, home_red, away_red, home_possession, away_possession, home_attempts, away_attempts, home_fouls, away_fouls, extra_time, penalties, hint } = this.props.game


    return(
      <React.Fragment>
        <div className="game-container">
          <header className="game-card-header">
            <h3>{round}</h3>
            <h3>{location}</h3>
          </header>
        </div>
        <div className="game-stats">
          <div className="home-stats">
            <h5>Home Team</h5>
            <p>{home_goals}</p>
            <p>Attempts: {home_attempts}</p>
            <p>Possession: {home_possession}</p>
            <p>Fouls: {home_fouls}</p>
            <p>Yellow cards: {home_yellow}</p>
            <p>Red cards: {home_red}</p>
            <p>Tactics: {home_tactics}</p>
          </div>
          <div className="away-stats">
            <h5>Away Team</h5>
            <p>{away_goals}</p>
            <p>Attempts: {away_attempts}</p>
            <p>Possession: {away_possession}</p>
            <p>Fouls: {away_fouls}</p>
            <p>Yellow cards: {away_yellow}</p>
            <p>Red cards: {away_red}</p>
            <p>Tactics: {away_tactics}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GameCard;
