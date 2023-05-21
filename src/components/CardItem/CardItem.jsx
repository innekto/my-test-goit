import {
  AvatarWrapper,
  UserInformation,
  TweetsAndFollowersInfo,
  AvatarImg,
} from 'components/CardItem/CardItem.styled';

export const CardItem = ({ aboutUser, isFollowing }) => {
  const { user, tweets, avatar, followers } = aboutUser;
  // console.log('followers', followers);

  const options = { style: 'decimal', maximumFractionDigits: 0 };

  return (
    <>
      <AvatarWrapper>
        <AvatarImg src={avatar} alt={user} />
      </AvatarWrapper>
      <UserInformation>
        <TweetsAndFollowersInfo>{tweets} tweets</TweetsAndFollowersInfo>
        <TweetsAndFollowersInfo>
          {isFollowing
            ? (followers + 1).toLocaleString('en-US', options)
            : followers.toLocaleString('en-US', options)}{' '}
          followers
        </TweetsAndFollowersInfo>
      </UserInformation>
    </>
  );
};
