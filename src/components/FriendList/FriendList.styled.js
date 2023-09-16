import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px dashed grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px;
`;
