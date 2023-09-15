import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { Container } from 'components/util/General.styled';

export default function FriendList({ friends }) {
    return (
        <Container>
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className="item" key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul >
        </Container>  
    );
};

FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
}
