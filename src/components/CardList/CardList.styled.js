import styled from '@emotion/styled';

export const ListEl = styled.ul`
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 380px); /* Три колонки шириною 380px */
  grid-template-rows: repeat(4, 1fr); /* Чотири рядки */
  grid-gap: calc((1200px - 380px * 3) / 2);
`;
