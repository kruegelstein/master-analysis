import React, { Component } from 'react';
import {
  ResultsContainer,
  TabContainer,
  Tab,
  Result,
  GameContainer,
  Heading,
  DimensionContainer,
  LevelContainer,
  Name,
  ScoreContainer
} from './Results.js'

import { getLevels, getScoreForLevel} from '../../helper/dataHelper'

const categories = ['Overview']
const games = ['Fruit', 'Breakout', 'Simon']
const dimensions = ['Linear', 'Half', 'Log']

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
        <Result>
        {games.map(game =>
          <GameContainer key={game}>
            <Heading primary>{game}: </Heading>
            {dimensions.map(dimension =>
              <DimensionContainer key={dimension}>
                <Heading>{dimension}: </Heading>
                {getLevels(this.props.data, game, dimension).map((level, index) =>
                  <div key={level}>
                    <LevelContainer >
                      <Name>{level}: </Name>
                    </LevelContainer>
                    <ScoreContainer key={index}>
                      <Name>Hits: {getScoreForLevel(this.props.data, game, dimension, level).hits}</Name>
                      <Name>Misses: {getScoreForLevel(this.props.data, game, dimension, level).misses}</Name>
                      <Name>Speed: {getScoreForLevel(this.props.data, game, dimension, level).speed}</Name>
                    </ScoreContainer>
                  </div>
                )}
              </DimensionContainer>
            )}
          </GameContainer>
        )}
        </Result>
      </ResultsContainer>
    );
  }
}

export default Results;
