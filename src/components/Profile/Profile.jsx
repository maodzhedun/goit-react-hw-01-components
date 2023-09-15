import PropTypes from 'prop-types';
import { Avatar, Stats, Name, Details } from './Profile.styled'
import { Container} from 'components/util/General.styled'

export default function Profile({ username, tag, location, avatar, stats: {followers, views, likes } }) {
  return <Container>
  <div>
    <Avatar
      src={avatar}
      alt="User avatar"
     />
    <Name>{username}</Name>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <Stats>
    <Details>
      <span>Followers</span>
      <span>{followers}</span>
    </Details>
    <Details>
      <span>Views</span>
      <span>{views}</span>
    </Details>
    <Details>
      <span>Likes</span>
      <span>{likes}</span>
    </Details>
  </Stats>
</Container>
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}