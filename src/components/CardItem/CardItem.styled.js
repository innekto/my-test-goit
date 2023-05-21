import styled from '@emotion/styled';
import rectangle from 'components/images/rectangle.png';

export const AvatarWrapper = styled.div`
  background-repeat: no-repeat;
  background-image: url(${rectangle});
  background-position: center;
  width: 380px;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 131px;
`;

export const AvatarImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const UserInformation = styled.div`
  padding-top: 26px;
  padding-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TweetsAndFollowersInfo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
  text-transform: uppercase;
  margin-bottom: 16px;
  :last-of-type {
    margin-bottom: 0;
  }
`;
