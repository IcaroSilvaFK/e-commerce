import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  text-align: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border-radius: 10px;

  padding: 10px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export const ContainerTitle = styled.div`
  flex-grow: 1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;

  margin-top: 10px;

  background-color: #68d391;

  padding: 5px 10px;

  border-radius: 5px;
  color: #fff;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;
