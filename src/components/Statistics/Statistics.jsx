import PropTypes from 'prop-types';
import { Container } from 'components/util/General.styled'
import { Statistic, Data } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <h2>{ title }</h2>}
      <Statistic>
      {stats.map(({ id, label, percentage }) => {
        return (
          <Data key={id}>
            <span >{label}</span>
            <span >{percentage}%</span>
          </Data>
        );
      })}
    </Statistic>
  </Container>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
}