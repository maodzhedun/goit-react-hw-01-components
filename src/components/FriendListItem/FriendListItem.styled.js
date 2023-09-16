import styled from 'styled-components';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ children }) => (children ? 'green' : 'red')};
`;