import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  font-weight: 300;
`;

export const Thead = styled.thead`
  background-color: rgb(106, 202, 217);
  text-transform: uppercase;
`;

export const Tbody = styled.tbody`
font-size: 14px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: rgb(243, 246, 249);
  }
`;