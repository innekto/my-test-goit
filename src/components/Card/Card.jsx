import { Button, Frame, Logo } from 'components/Card/Card.styled';
import React, { useEffect, useState } from 'react';
import logo from 'components/images/logo.png';
import { CardItem } from 'components/CardItem/CardItem';

export const Card = ({ aboutUser }) => {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const followingUsers = JSON.parse(localStorage.getItem('followingUsers'));

    if (followingUsers) {
      const isFollowing = followingUsers.some(id => id === aboutUser.id);

      if (isFollowing) {
        setFollowing(true);
      }
    }
  }, [aboutUser.id]);

  const handleFollowClick = () => {
    const followingUsers = JSON.parse(localStorage.getItem('followingUsers'));

    if (!following) {
      setFollowing(true);
      if (followingUsers) {
        localStorage.setItem(
          'followingUsers',
          JSON.stringify([...followingUsers, aboutUser.id])
        );
      } else {
        localStorage.setItem('followingUsers', JSON.stringify([aboutUser.id]));
      }
    } else {
      setFollowing(false);
      const updatedFollowingUsers = followingUsers.filter(
        id => id !== aboutUser.id
      );
      localStorage.setItem(
        'followingUsers',
        JSON.stringify(updatedFollowingUsers)
      );
    }
  };

  return (
    <Frame>
      <Logo src={logo} alt="Logo" />
      <CardItem aboutUser={aboutUser} isFollowing={following} />
      <Button
        onClick={handleFollowClick}
        style={{ backgroundColor: following ? '#5CD3A8' : '#EBD8FF' }}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
    </Frame>
  );
};
