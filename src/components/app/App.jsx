import React, { Component } from 'react';
import AppContainer from './App.js'
import ParticipantsList from '../participantsList/ParticipantsList.jsx'


class App extends Component {
  render() {
    return (
      <AppContainer>
        <ParticipantsList />
      </AppContainer>
    );
  }
}

export default App;
