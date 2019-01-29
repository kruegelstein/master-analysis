import React, { Component } from 'react';
import AppContainer from './App.js'
import ParticipantsList from '../participantsList/ParticipantsList.jsx'
import Results from '../results/Results.jsx'

// Helper
import {getParticipants} from '../../helper/listHelper.js'
import {getDataForParticipant} from '../../helper/dataHelper.js'

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
    selectedParticipant: 'P1',
    selectedCategory: 'Overview',
    selectedGame: 'Fruit',
    selectedDimension: 'Linear',
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

  selectDimension(dimension) {
    this.setState({selectedDimension: dimension})
  }

  render() {
    const relevantData = getDataForParticipant(this.state.selectedParticipant)
    return (
      <AppContainer>
        <ParticipantsList
          data={this.state.data}
          participants={getParticipants(this.state.data)}
          selectParticipant={(participant) => this.selectParticipant(participant)}
          selectedParticipant={this.state.selectedParticipant}/>
        <Results
          data={relevantData}
          selectedParticipant={this.state.selectedParticipant}
          selectedCategory={this.state.selectedCategory}
          selectCategory={(cat) => this.selectCategory(cat)}
          // selectedGame={this.state.selectedGame}
          // selectGame={(game) => this.selectGame(game)}
          selectedDimension={this.state.selectedDimension}
          // selectDimension={(dimension) => this.selectDimension(dimension)}
        />
      </AppContainer>
    );
  }
}

export default App;
