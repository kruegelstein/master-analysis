import React, { Component } from 'react';
import AppContainer from './App.js'
import ParticipantsList from '../participantsList/ParticipantsList.jsx'
import Results from '../results/Results.jsx'

// Helper
import {getParticipants} from '../../helper/listHelper.js'

const part1 = require('../../data/P1-P3.json');
const part2 = require('../../data/P4-P9.json');
const part3 = require('../../data/P10-P13.json');
const part4 = require('../../data/P14-P19.json');
const part5 = require('../../data/P19Rest-P21.json');
const part6 = require('../../data/P22-P24.json');
const part7 = require('../../data/P25-P27.json');
const part8 = require('../../data/P28-P30.json');

class App extends Component {
  state = {
    data: {},
    selectedParticipant: 'all',
    selectedCategory: 'Overview',
    selectedGame: 'Fruit'
  }

  componentDidMount() {
    this.setState({data: {...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part8}})
  }

  selectParticipant(participant) {
    this.setState({selectedParticipant: participant})
  }

  selectCategory(cat) {
    this.setState({selectedCategory: cat})
  }

  selectGame(game) {
    this.setState({selectedGame: game})
  }

  render() {
    return (
      <AppContainer>
        <ParticipantsList
          participants={getParticipants(this.state.data)}
          selectParticipant={(participant) => this.selectParticipant(participant)}
          selectedParticipant={this.state.selectedParticipant}/>
        <Results
          data={this.state.data}
          selectedParticipant={this.state.selectedParticipant}
          selectedCategory={this.state.selectedCategory}
          selectedGame={this.state.selectedGame}
          selectCategory={(cat) => this.selectCategory(cat)}
          selectGame={(game) => this.selectGame(game)}
        />
      </AppContainer>
    );
  }
}

export default App;
