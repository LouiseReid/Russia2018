import React from 'react';
import _ from 'lodash';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      currentGame: null
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

  render(){
    return(
      <h1>Main</h1>
    )
  }
}

export default Main;
