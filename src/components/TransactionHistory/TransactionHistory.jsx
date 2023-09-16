import PropTypes from 'prop-types';
import { Container } from 'components/util/General.styled';
import { Table, Thead, Tbody, Tr } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
    return (
        <Container>
        <Table>
            <Thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </Thead>

            <Tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <Tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </Tr>
                )
                )}
            </Tbody>
            </Table>
        </Container>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}