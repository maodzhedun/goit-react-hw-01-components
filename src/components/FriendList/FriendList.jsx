import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { Container } from 'components/util/General.styled';
import { List,Item } from './FriendList.styled';

export default function FriendList({ friends }) {
    return (
        <Container>
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Item key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </Item>
            ))}
        </List >
        </Container>  
    );
};

FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
}
