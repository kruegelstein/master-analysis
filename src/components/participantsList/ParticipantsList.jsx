import React, { Component } from 'react';
import ParticipantsListContainer from './ParticipantsList.js'
import ListHeadLine from './ListHeadLine.js'
import ListItem from './ListItem.js'
import List from './List.js'
import ListText from './ListText.js'

class ParticipantsList extends Component {
  state = {
    url: ''
  }

  componentWillReceiveProps(nextProps) {
    if(Object.keys(nextProps.data).length > 0) {
      var data = nextProps.data;
      var json = JSON.stringify(data);
      var blob = new Blob([json], {type: "application/json"});
      var url  = URL.createObjectURL(blob);
      this.setState({url})
    }
  }

  render() {
    return (
      <ParticipantsListContainer>
        <div>
        <ListHeadLine>
          Participants:
          <a download='combinedData.json' href={this.state.url}>
          <button>File</button>
          </a>
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
