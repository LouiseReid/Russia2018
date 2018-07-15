import React from 'react';

class GuessForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      home: '',
      away:''
    }
  }

  handleGuess(){
    if(this.props.home === this.state.home && this.props.away === this.state.away){
      this.props.correctGuess()
      this.setState({home: '', away: ''})
    } else if (this.props.home === this.state.home && this.props.away !== this.state.away){
      this.setState({away: ''})
    } else if (this.props.home !== this.state.home && this.props.away === this.state.away) {
      this.setState({home: ''})
    } else {
      this.setState({home: '', away: ''})
    }
  }

  giveUp(){
    this.setState({home: this.props.home, away: this.props.away})
    this.props.giveUp()
  }

  render(){

    return(
      <div className="guess-inputs">
        <input
          type="text"
          placeholder="home team"
          value={this.state.home}
          onChange={event => this.setState({ home: event.target.value })}
        />
        <input
          type="text"
          placeholder="away team"
          value={this.state.away}
          onChange={event => this.setState({ away: event.target.value })}
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
    )
  }

}

export default GuessForm
