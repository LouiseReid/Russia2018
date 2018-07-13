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
    }
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
      </div>
    )
  }

}

export default GuessForm
