import styled from '@emotion/styled';

import background from 'components/images/background.png';

export const Frame = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-image: url(${background}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat no-repeat;
  background-position: top 28px left 36px, center;
  background-size: 308 px 168px cover;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Rectangle = styled.img`
  position: absolute;
  top: 214px;
  left: 0;
  z-index: -1;
`;

export const Tweets = styled.p`
  margin-top: 242px;
  text-align: center;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-top: 16px;
  margin-bottom: 26px;
  text-align: center;
  color: #ebd8ff;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
