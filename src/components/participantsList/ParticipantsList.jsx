import React, { Component } from 'react';
import ParticipantsListContainer from './ParticipantsList.js'
import ListHeadLine from './ListHeadLine.js'
import ListItem from './ListItem.js'
import List from './List.js'
import ListText from './ListText.js'

const part1 = require('../../data/P1-P3.json');
const part2 = require('../../data/P4-P9.json');
const part3 = require('../../data/P10-P13.json');
const part4 = require('../../data/P14-P19.json');
const part5 = require('../../data/P19Rest-P21.json');
const part6 = require('../../data/P22-P24.json');
const part7 = require('../../data/P25-P27.json');
const part8 = require('../../data/P28-P30.json');


class ParticipantsList extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    this.setState({data: {...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part8}})
  }

  render() {
    return (
      <ParticipantsListContainer>
        <ListHeadLine>
          Availiable data:
        </ListHeadLine>
        <List>
          {Object.keys(this.state.data).map(key =>
            <ListItem key={key}>
              <ListText>{key}</ListText>
            </ListItem>
          )}
        </List>
      </ParticipantsListContainer>
    );
  }
}

export default ParticipantsList;
