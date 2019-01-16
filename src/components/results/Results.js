import styled from 'styled-components'

export const ResultsContainer = styled.div`
  border: 1px solid black;
  display: inline-block;
  width: 85%;
  margin: 1rem;
  height: 41rem;
  border-radius: 5px;
`;

export const TabContainer = styled.div`
  background-color: #80808038;
  border-bottom: 1px solid black;
  display: inline-block;
  width: 100%;
  height: 2rem;
`;

export const Tab = styled.div`
  border-right: 1px solid black;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  background-color: ${props => props.selected ? '#ff6363' : 'inherit'};
  cursor: pointer;
`;

export const Result = styled.div`
  height: calc(100% - 6rem);
  overflow: scroll;
`;

export const GameContainer = styled.div`
  margin: 1rem 0 0 0;
  padding: 1rem 0
  border-bottom: 1px solid black;
`;

export const DimensionContainer = styled.div`
  margin: 1rem 0 0 0;
  padding: 1rem 0
`;

export const LevelContainer = styled.div`
  margin: 1rem 1rem;
  padding: 1rem 0;
  display: inline-block;
`;

export const ScoreContainer = styled.div`
  margin: 1rem 1rem;
  padding: 1rem 0;
  display: inline-block;
`;

export const Heading = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-decoration: ${props => props.primary ? 'underline': 'none'}
`;

export const Name = styled.span`
  padding: 1rem;
`;
