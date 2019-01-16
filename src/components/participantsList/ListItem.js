import styled from 'styled-components'

const listHeadLine = styled.div`
  width: 10rem;
  text-align: center;
  height: 2rem;
  border-bottom: 1px solid black;
  position: relative;
  cursor: pointer;
  background-color: ${props => props.selected ? '#ff6363' : 'inherit'}
`;

export default listHeadLine;
