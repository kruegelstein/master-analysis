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
  getRoundSuccess(game, hits, misses, totalClicks) {
    switch(game) {
      case 'Fruit':
        return (hits-misses)/totalClicks
      case 'Breakout':
        return (hits-misses)/(hits+misses)
      case 'Simon':
        return hits/5
      default:
        return 'UNDEFINED'
    }
  }
  calculateSuccessRate(game, dimension) {
    const elements = document.getElementsByClassName("SUC")
    let total = 0
    const flElementIds = Object.keys(elements).filter(index =>
      elements[index].id.indexOf(game) > -1 && elements[index].id.indexOf(dimension) > -1)
    const flElementValues = flElementIds.map(index => parseFloat(elements[index].childNodes[1].innerHTML))
    flElementValues.forEach(value => total += value)
    total = total/flElementValues.length
    console.log(total)
    return total
  }
  getTotalSuccess(game, dimension) {
    switch(game) {
      case 'Fruit':
        switch(dimension) {
          case 'Linear':
            return this.calculateSuccessRate(game, dimension)
          case 'Half':
            return this.calculateSuccessRate(game, dimension)
          case 'Log':
            return this.calculateSuccessRate(game, dimension)
          default:
            return 'NOT FOUND(DIMENSION)'
        }
      case 'Breakout':
        switch(dimension) {
          case 'Linear':
            return this.calculateSuccessRate(game, dimension)
          case 'Half':
            return this.calculateSuccessRate(game, dimension)
          case 'Log':
            return this.calculateSuccessRate(game, dimension)
          default:
            return 'NOT FOUND (DIMENSION)'
        }
      case 'Simon':
        switch(dimension) {
          case 'Linear':
            return this.calculateSuccessRate(game, dimension)
          case 'Half':
            return this.calculateSuccessRate(game, dimension)
          case 'Log':
            return this.calculateSuccessRate(game, dimension)
          default:
            return 'NOT FOUND (DIMENSION)'
        }
      default:
        return 'NOT FOUND (GAME)'
    }
  }
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
                {getLevels(this.props.data, game, dimension).map((level, index) => {
                  const hits = getScoreForLevel(this.props.data, game, dimension, level).hits
                  const misses = getScoreForLevel(this.props.data, game, dimension, level).misses
                  const totalClicks = getScoreForLevel(this.props.data, game, dimension, level).numOfClicks
                  const speed = getScoreForLevel(this.props.data, game, dimension, level).speed
                  return(
                    <div key={level}>
                    <LevelContainer >
                    <Name>{level}: </Name>
                    </LevelContainer>
                    <ScoreContainer key={index}>
                    <Name>Hits: {hits}</Name>
                    <Name>Misses: {misses}</Name>
                    <Name>Total clicks: {totalClicks}</Name>
                    <Name>Speed: {speed}</Name>
                    <Name className='SUC' id={`${game+dimension+index}`}>Round success: <span>{this.getRoundSuccess(game, hits, misses, totalClicks)}</span></Name>
                    </ScoreContainer>
                    </div>
                  )}
                )}
                <Name>Total Success: {this.getTotalSuccess(game, dimension)}</Name>
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
