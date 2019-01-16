import React, { Component } from 'react';
import {ResultsContainer, TabContainer, Tab} from './Results.js'

const categories = ['Overview']
const games = ['Fruit', 'Breakout', 'Simon']

class Results extends Component {
  render() {
    return (
      <ResultsContainer>
        <TabContainer>
        {categories.map(cat =>
          <Tab
            key={cat}
            onClick={() => this.props.selectCategory(cat)}
            selected={cat === this.props.selectedCategory}
          >{cat}</Tab>
        )}
        </TabContainer>
        <TabContainer>
        {games.map(game =>
          <Tab
            key={game}
            onClick={() => this.props.selectGame(game)}
            selected={game === this.props.selectedGame}
          >{game}</Tab>
        )}
        </TabContainer>
      </ResultsContainer>
    );
  }
}

export default Results;
