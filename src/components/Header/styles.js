import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 40px;
`;

export const Title = styled.h1`
  word-spacing: -2px;

  text-transform: uppercase;
  font-weight: 400;

  color: var(--color-red);
  filter: brightness(1.2);
`;
