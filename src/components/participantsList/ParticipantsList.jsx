import React, { Component } from 'react';
import ParticipantsListContainer from './ParticipantsList.js'
import ListHeadLine from './ListHeadLine.js'
import ListItem from './ListItem.js'
import List from './List.js'
import ListText from './ListText.js'

class ParticipantsList extends Component {

  render() {
    return (
      <ParticipantsListContainer>
        <div>
        <ListHeadLine>
          Participants:
        </ListHeadLine>
        <List>
          <ListItem
            key='all'
            selected={this.props.selectedParticipant === 'all'}
            onClick={() => this.props.selectParticipant('all')}
          >
            <ListText>All</ListText>
          </ListItem>
          {this.props.participants.map(participant =>
              <ListItem
                key={participant}
                selected={participant === this.props.selectedParticipant}
                onClick={() => this.props.selectParticipant(participant)}
              >
              <ListText>{participant}</ListText>
              </ListItem>
          )}
        </List>
        </div>
      </ParticipantsListContainer>
    );
  }
}

export default ParticipantsList;
