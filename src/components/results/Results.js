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
