import styled from '@emotion/styled';

export const ListEl = styled.ul`
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: calc((1200px - 380px * 3) / 2);
`;

export const Button = styled.button`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  margin: auto;
  display: block;
  margin-top: 20px;
  cursor: pointer;
`;
