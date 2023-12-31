import styled from 'styled-components';
import { getRandomColor } from 'components/util/GetRandomColor';

export const Statistic = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  font-size: 18px;
  font-weight: 600;
  `;

export const Data = styled.li`
  display: flex;
  flex-direction: column;
  padding: 22px;
  color: rgb(230, 220, 220);
  background-color: ${getRandomColor};
`;