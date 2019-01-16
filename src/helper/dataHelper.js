const part1 = require('../data/P1-P3.json');
const part2 = require('../data/P4-P9.json');
const part3 = require('../data/P10-P13.json');
const part4 = require('../data/P14-P19.json');
const part5 = require('../data/P19Rest-P21.json');
const part6 = require('../data/P22-P24.json');
const part7 = require('../data/P25-P27.json');
const part8 = require('../data/P28-P30.json');

export const getDataForParticipant = (participant) => {
  const data = {...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part8}
  const selectedParticipant = participant
  // single selected participant
  filterByParticipant(selectedParticipant, data)
  return data
}

const filterByParticipant = (selectedParticipant, data) => {
  Object.keys(data).forEach(key => {
    const singleParticipantNumber = selectedParticipant.length === 2
    if(key.indexOf(selectedParticipant) === -1) {
      delete data[key]
    }
    if(singleParticipantNumber && key.length > 4) {
      delete data[key]
    }
  })
}

export const getScoreForLevel = (data, game, dimension, level) => {
  let score = {}
  const gameDimensionId = getDimenionId(game, dimension)
  Object.keys(data).forEach(key => {
    if(key.indexOf(gameDimensionId) > -1) {
      if (game === 'Fruit') {
        score['hits'] = data[key].results[level.slice(-1)].results.hits
        score['misses'] = data[key].results[level.slice(-1)].results.misses
        score['speed'] = data[key].results[level.slice(-1)].speed
      }
      if(game === 'Simon') {
        score['hits'] = data[key].results[level.slice(-1)].results.correct
        score['misses'] = data[key].results[level.slice(-1)].results.errors
        score['speed'] = data[key].results[level.slice(-1)].speed
      }
      if(game === 'Breakout') {
        console.log('###', data[key])
        score['hits'] = data[key].results[level.slice(-1)].results.destroyedBricks
        score['misses'] = data[key].results[level.slice(-1)].results.losses
        score['speed'] = data[key].results[level.slice(-1)].speed
      }
    }
  })
  return score
}

export const getLevels = (data, game, dimension) => {
  const gameDimensionId = getDimenionId(game, dimension)
  let levels = []
  Object.keys(data).forEach(key => {
    if(key.indexOf(gameDimensionId) > -1){
      Object.keys(data[key].results).forEach(level => {
        if(level !== 'stepsize') {
          levels.push('Level '+level)
        }
      })
    }
  })
  return levels
}

const getDimenionId = (game, dimension) => {
  let gameDimensionId = ''
  switch(game) {
    case 'Fruit':
      gameDimensionId = gameDimensionId.concat('F')
      break;
    case 'Breakout':
      gameDimensionId = gameDimensionId.concat('B')
      break;
    case 'Simon':
      gameDimensionId = gameDimensionId.concat('S')
      break;
    default: return
  }

  switch(dimension) {
    case 'Linear':
      gameDimensionId = gameDimensionId.concat('L')
      break;
    case 'Half':
      gameDimensionId = gameDimensionId.concat('H')
      break;
    case 'Log': //(smart)
      gameDimensionId = gameDimensionId.concat('S')
      break;
    default: return
  }
  return gameDimensionId
}
